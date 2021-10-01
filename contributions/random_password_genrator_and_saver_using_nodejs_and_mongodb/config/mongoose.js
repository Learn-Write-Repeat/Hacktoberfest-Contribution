const { MongoServerError } = require('mongodb');
const db_path = process.env.DB;
const mongoose = require('mongoose');
mongoose.connect(db_path);
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiong to mongodb"));
db.once('open',function(){
    console.log('Connected to mongodb');
})

module.exports = db;
