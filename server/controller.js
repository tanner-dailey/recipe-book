const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const foundUser = await db.get_user({email})
        if(foundUser[0]) {
            return res.status(400).send('Email taken')
        }
        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt)
        const newUser = await db.register_user({email, hash})
        req.session.user = newUser[0]
        return res.status(201).send(req.session.user)
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const db = req.app.get('db')
        const foundUser = await db.get_user({email})
        if(!foundUser[0]) {
            return res.status(400).send('User not found. Please register before logging in')
        }
        const isAuthenticated = bcrypt.compareSync(password, foundUser[0].password)
        if(!isAuthenticated) {
            return res.status(401).send('Incorrect password')
        }
        req.session.user = foundUser[0]
        res.status(202).send(req.session.user)
    },

    getRecipes: async (req, res) => {
        const {user_id} = req.body
        const db = req.app.get('db')
        db.get_recipes({user_id})
            .then(recipes => res.status(200).send(recipes))
            .catch(err => {
                res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
                console.log(err)
            });
    },

    addRecipe: async (req, res) => {
        const {user_id, title} = req.body
        const db = req.app.get('db')
        db.add_recipe({user_id, title})
            .then((recipe) => {
                res.status(200).send(recipe)
            })
            .catch(err => {
                res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
                console.log(err)
            });
    },

    addIngs: async (req, res) => {
        const {ing, recipe_id} = req.body
        const db = req.app.get('db')
        db.add_ings({ing, recipe_id})
        .then((ings) => {
            res.status(200).send(ings)
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
            console.log(err)
        });
    },

    getRecId: async (req, res) => {
        const {title} = req.body
        const db = req.app.get('db')
        db.get_rec_id({title})
            .then(recId => res.status(200).send(recId))
            .catch(err => {
                res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
                console.log(err)
            });
    },

    delete: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete({id}).then(res.sendStatus(200))
    },

    getSingle: async (req, res) => {
        const {id} = req.body
        const db = req.app.get('db')
        db.get_single({id})
        .then(recipe => {
            const recMap = {title: '', ings: [], steps: []}
            const addedSteps = []
            recipe.map(el => {
                if(recMap.title === ''){
                    recMap.title = el.title
                }
                if(!recMap.ings.includes(el.ing)){
                    recMap.ings.push(el.ing)
                }
                if(!addedSteps.includes(el.step_id)){
                    addedSteps.push(el.step_id)
                    recMap.steps.push(el.step)
                }
            })
            res.status(200).send(recMap)})
        .catch(err => {
            res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
            console.log(err)
        });
    }
}