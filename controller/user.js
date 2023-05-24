const db = require('../db')
class UserController{
    async createUser(req, res){
        const {name, surname, number, pass} = req.body
        const newPerson = await db.query(`INSERT INTO person (name, surname, number, pass) values ($1, $2, $3, $4) RETURNING *`, [name, surname, number, pass])

        res.redirect('/')
        
    }

    async getUsers(req, res){
        const users = await db.query('SELECT * FROM person')
        res.json(users.rows)
    }

    async getOneUser(req, res){
        const id = req.params.id
        const user = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(user.rows[0])
    }

    async updateUser(req, res){
        const {id, name, surname, number, pass} = req.body
        const user = await db.query(
            'UPDATE person set name = $1, surname = $2, number = $3, pass = $4 where id = $5 RETURNING *', 
            [name, surname, number, pass, id]
        )
        res.json(user.rows[0])
    }

    async deleteUser(req, res){
        const id = req.params.id
        const user = await db.query('DELETE FROM person where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new UserController()