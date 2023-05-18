const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/home')
const loginRoutes = require('./routes/login')
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

app.use(express.static('public'))
app.use(express.static('img'))
app.use(express.static('icon'))
app.use(express.urlencoded({extended: true}))

app.use('/', homeRoutes)
app.use('/login', loginRoutes)
app.use('/replenishment', replenishmentRoutes)
app.use('/replenishment2', replenishment2Routes)
app.use('/replenishment3', replenishment3Routes)
app.use('/translations', translationsRoutes)


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})