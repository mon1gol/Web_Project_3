const db = require('../db')

class CardController{
    async createCard(req, res){
        const {title, number, userId} = req.body
        const newCard = await db.query(`INSERT INTO card (title, number, user_id) values ($1, $2, $3) RETURNING *`, [title, number, userId])
        res.json(newCard.rows[0])
    }

    async getCardsByUser(req, res){
        const id = req.query.id
        const cards = await db.query(`select * from card where user_id = $1`, [id])
        res.json(cards.rows)
    }

    async deleteCard(req, res){
        const id = req.params.id
        const card = await db.query(`DELETE FROM card where id = $1`, [id])
        res.json(card.rows[0])
    }
}

module.exports = new CardController()