const express = require('express')
const app = express()
const puerto = 3000
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('views'))
app.set("view engine","ejs")

app.get('/',(req,res) => {
  res.render("index",{
            titulo: "Inicio"
        })
})

app.listen(puerto,() => {
  console.log('Iniciando en puerto:', puerto)
})
