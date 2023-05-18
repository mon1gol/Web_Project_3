const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('login', {
        title: "Вход",
        isLogin: true
    })
})

module.exports = router