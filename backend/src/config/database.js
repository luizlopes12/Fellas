const mongoose = require("mongoose");
//connectando com o banco de dados
mongoose.connect('')
console.log(mongoose.connection.readyState)
//executando a conexão
const db = mongoose.connection
//exportando a classe de conexão
module.exports = db;
