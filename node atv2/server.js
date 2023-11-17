const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')

//configure template handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
express.urlencoded({
extended: true
})
)
app.use(express.json())

app.get('/users/add', (req, res) => {
res.render('userform')
})

app.post('/users/save', (req, res) => {
const name = req.body.name
const age = req.body.age
const email = req.body.email
const user = { name: name, age: age, email:email}
res.render('viewuser', { user: user })

})

app.get('/', (req, res) => {
res.render('home')
})



//webserver
app.listen(port, () => {
console.log('Server Started')
})