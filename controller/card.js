const {db, pgp} = require('../db')

class CardController{
    async createCard(req, res){
        const {title, number} = req.body
        const userId = req.cookies.userId;
        const newCard = await db.query(`INSERT INTO card (title, number, user_id) values ($1, $2, $3) RETURNING *`, [title, number, userId])
        res.redirect('/my_cards')
    }

    async getCardsByUser(userId) {
        const cards = await db.query('SELECT * FROM card WHERE user_id = $1', [userId]);
        return cards;
    }

    async deleteCard(req, res){
        const id = req.params.id
        const card = await db.query(`DELETE FROM card where id = $1`, [id])
        res.json(card.rows[0])
    }
}

module.exports = new CardController()