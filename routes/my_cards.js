const {Router} = require('express')
const router = Router()
const cardController = require('../controller/card')

router.get('/', async (req, res) => {
    const userId = req.cookies.userId;
    if (!userId) {
        res.clearCookie('userId');
        return res.redirect('/login');
    } else {
        const cards = await cardController.getCardsByUser(userId);
        res.render('my_cards', {
            title: "Мои карты",
            isMyCards: true,
            cards
        });
    }
});

module.exports = router