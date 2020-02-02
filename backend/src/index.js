const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')
const porta = 4003

mongoose.connect((process.env.MONGODSN2020 || 'mongodb+srv://<user>:<pass>@<cluster>/<database>'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(porta, ()=>{
    console.log(`Voando na porta ${porta} 🚀`)
})