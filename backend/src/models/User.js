const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    id:{
        type: String
    },
    name: {
        type: String,
        required: true
    }
},
{
    versionKey: false
}
)

const Users = mongoose.model('users', UserSchema)

module.exports = Users;