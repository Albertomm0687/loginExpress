

const userSchema = new require('mongoose').Schema({
    username: String,
    password: String,
    email: String
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

module.exports = require('mongoose').model('User', userSchema);