const mongoose = require('mongoose');
const path = require('path');

const passwordSchema = new mongoose.Schema({
    socialhandel :{
        type : String,
        required : true
    },
    password: {
        type: String,
        required:true,
    },
    user: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
},{
    timestamps:true
});

const Password = mongoose.model('Password',passwordSchema);
module.exports = Password;