const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('replenishment2', {
        title: "Пополнение",
        isReplenishment2: true
    })
})

module.exports = router