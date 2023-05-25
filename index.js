const express = require('express')
const exphbs = require('express-handlebars')
const cookieParser = require('cookie-parser')

const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/login')
const registrationRoutes = require('./routes/registration')
const create_cardRoutes = require('./routes/create_card')
const my_cardsRoutes = require('./routes/my_cards')
const replenishmentRoutes = require('./routes/replenishment')
const replenishment2Routes = require('./routes/replenishment2')
const replenishment3Routes = require('./routes/replenishment3')
const translationsRoutes = require('./routes/translations')

const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(cookieParser())

app.use(express.static('public'))
app.use(express.static('img'))
app.use(express.static('icon'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/registration', registrationRoutes)
app.use('/create_card', create_cardRoutes)
app.use('/my_cards', my_cardsRoutes)
app.use('/replenishment', replenishmentRoutes)
app.use('/replenishment2', replenishment2Routes)
app.use('/replenishment3', replenishment3Routes)
app.use('/translations', translationsRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    app.use((req, res, next) => {
        res.clearCookie('userId');
        next();
      });
});