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

    getGeneral: (req, res) => {
        const db = req.app.get('db')
        db.get_recipes()
            .then(recipes => res.status(200).send(recipes))
            .catch(err => {
                res.status(500).send({errorMessage: 'Sorry! Something went wrong on our end.'});
                console.log(err)
            });
    }
}