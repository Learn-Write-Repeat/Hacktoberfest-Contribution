const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const getupload = require('./routes/uploadget');
const postupload = require('./routes/uploadpost');
const imgprocess = require('./routes/imgprocess');
const app = express();
const fsExtra = require('fs-extra');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(path.join(__dirname +'/uploads')));

//=================
//Get Upload Route
//=================
app.use("/upload",getupload);

//=================
//ImgProcess Route
//=================
app.use("/imgprocess",imgprocess);

//=================
//Post Upload Route
//=================
app.use("/upload",postupload);

app.get('/',function(req,res){
        fsExtra.emptyDirSync('./uploads');
        res.render('home.ejs');    
});

//================
//Listen Port
//================
app.listen(process.env.PORT||3000,function(){
    console.log("Server is running");
});