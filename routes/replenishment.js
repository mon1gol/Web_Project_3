const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('replenishment', {
        title: "Пополнение",
        isReplenishment: true
    })
})

module.exports = router