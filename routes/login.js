const {Router} = require('express')
const router = Router()
const userController = require('../controller/user')

router.get('/', (req, res) => {
    res.render('login', {
        title: "Вход",
        isLogin: true
    })
})

router.post('/user/:id', userController.getOneUser)

router.get('/user', userController.getUsers)
router.put('/user', userController.updateUser)
router.delete('/user/:id', userController.deleteUser)

module.exports = router