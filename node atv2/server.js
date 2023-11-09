
const express = require('express')
const app = express()
app.use('/public', express.static(__dirname + '/public'))
app.get('/', (req, res) => {
  // envia o arquivo da página principal
  res.sendFile(__dirname + '/views/index.html')
})
app.get('/', (req, res) => {
  res.send('Olá mundo. Ir para Sobre')
})


app.listen(3000, () => {
  console.log('Server online')
})