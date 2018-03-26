const express = require('express')
const app = express()
const puerto = 80

app.get('/',(req,res) => {
  res.send('Mi buen amigo JS')
})

app.listen(puerto,() => {
  console.log('Iniciando en puerto:', puerto)
})
