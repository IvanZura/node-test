const express = require('express')
const app = express()
const puerto = 3000

app.get('/',(req,res) => {
  res.send('Mi buen amigo JS')
})

app.listen(puerto,() => {
  console.log('Iniciando en puerto:', puerto)
})
