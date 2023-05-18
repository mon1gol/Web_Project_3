const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('replenishment3', {
        title: "Пополнение",
        isReplenishment3: true
    })
})

module.exports = router