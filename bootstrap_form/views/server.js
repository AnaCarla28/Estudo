const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')


app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')


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
const nameProduto = req.body.nameProduto
const nameFornecedor = req.body.nameFornecedor
const dataCompra = req.body.dataCompra
const valorCompra = req.body.valorCompra
const valorVenda = req.body.valorVenda
const categoria = req.body.categoria
const user = { nameProduto: nameProduto, nameFornecedor: nameFornecedor, dataCompra:dataCompra, valorCompra:valorCompra, valorVenda:valorVenda, categoria:categoria}
res.render('viewuser', { user: user })

})

app.get('/', (req, res) => {
res.render('home')
})



app.listen(port, () => {
console.log('Server Started')
})