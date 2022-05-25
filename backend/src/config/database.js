const mongoose = require("mongoose");
//connectando com o banco de dados
mongoose.connect('mongodb+srv://luizlopes12:admin@nodedb.yfbap.mongodb.net/fellasdb?retryWrites=true&w=majority')
console.log(mongoose.connection.readyState)
//executando a conexão
const db = mongoose.connection
//exportando a classe de conexão
module.exports = db;
