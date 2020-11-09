const {SENDGRID_API_KEY} = process.env;

const sgMail = require('@sendgrid/mail')
module.exports = {
    email: async(req, res) => {
sgMail.setApiKey(SENDGRID_API_KEY)
const {email, password} = req.body
const msg = {
  to: `${email}`, // Change to your recipient
  from: 'nodemailertest768@gmail.com', // Change to your verified sender
  subject: 'Welcome',
  text: `Thanks for registering. Your password is ${password}`
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })
    } 
}