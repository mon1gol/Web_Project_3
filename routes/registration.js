const {Router} = require('express')
const router = Router()
const userController = require('../controller/user')

router.get('/', (req, res) => {
    res.render('registration', {
        title: "Регистрация",
        isRegistration: true
    })
})

router.post('/user', userController.createUser)

module.exports = router