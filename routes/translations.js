const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('translations', {
        title: "Переводы",
        isTranslations: true
    })
})

module.exports = router