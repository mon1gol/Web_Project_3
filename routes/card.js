const Router = require('express')
const router = new Router()
const cardController = require('../controller/card')

router.post('/', cardController.createCard)
router.get('/', cardController.getCardsByUser)
router.delete('/:id', cardController.deleteCard)

module.exports = router