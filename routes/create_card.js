const {Router} = require('express')
const router = Router()
const cardController = require('../controller/card')

router.get('/', (req, res) => {
    res.render('create_card', {
        title: "Создание карты",
        isCreateCard: true
    })
})

router.post('/', cardController.createCard)
router.delete('/:id', cardController.deleteCard)

module.exports = router