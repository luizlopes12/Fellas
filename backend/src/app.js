const express = require('express')
const app = express()
const db = require('./config/database.js')
const Users = require('./models/User.js')
const port = 3001
app.use(express.json())

app.listen(port, ()=>{
    console.log(`servidor rodando, porta ${port}`)
})