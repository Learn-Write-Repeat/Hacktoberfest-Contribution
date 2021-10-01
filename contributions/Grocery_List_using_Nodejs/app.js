const express = require('express');
const app = express();
const port = 5050;
const item = require('./models/items.js');
const mongoose = require('mongoose');
const mongodb = 'mongodb+srv://mustafa:abc.123@cluster0.nykx9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// Package for dymanic html
app.set('view engine', 'ejs');

// connecting to mongo db
mongoose.connect(mongodb, { useUnifiedTopology: true, useNewUrlParser: true }).then(() => {
    console.log("Connected")
    app.listen(port, () => { console.log(`Listing at port ${port}`) });
}).catch(err => console.log(err));


app.use(express.urlencoded({ extended: true }));

app.use(express.static('src'));


app.get('/', (req, res) => {
    // res.sendFile('./pages/todo.html', { root: __dirname });
    // const items = [
    //     { name: "Rice", price: 180 },
    //     { name: "Tamato", price: 50 },
    //     { name: "Yougart", price: 45 }
    // ]
    // res.render('todo', { items })

    res.redirect('/get-items');
});

app.get('/get-items', (req, res) => {
    item.find().then(result => {
        res.render('todo', { items: result })

    }).catch(err => console.log(err));
})

// Select * from the DB (Like its showing the all the data of the specific field)

app.get('/add-item', (req, res) => {
    // res.sendFile('./pages/add-item.html', { root: __dirname });
    res.render('add-item')
});


app.post('/items', (req, res) => {
    console.log(req.body);
    const Item = item(req.body);
    Item.save().then(() => {
        res.redirect('/get-items')
    }).catch(err => console.log(err))
})

// details of each item
app.get('/items/:id', (req, res) => {
    const id = req.params.id;
    item.findById(id).then(result => {
        console.log(result)
        res.render('item-detail', { item: result })
    })
});

// deleting each item
app.delete('/items/:id', (req, res) => {
    const id = req.params.id;
    item.findByIdAndDelete(id).then(result => {
        console.log(`deleted Item=  ${result}`)
        res.json({redirect:'/'})
    })
});

app.put('/items/:id', (req,res)=>{
    const id = req.params.id;
    item.findByIdAndUpdate(id, req.body).then(result=>{
        console.log(`Updated Item = ${result}`);
        res.json({msg: 'updated successfully'})
    })
})
// Just for learing

// // Saving Items to the mongo db DataBase
// app.get('/create-item', (req, res) => {
//     const Item = new item({
//         name: 'Onin',
//         price: 200
//     });
//     Item.save().then(result => res.send(result)).catch(err => console.log(err));
// });

// // Select * from the DB (Like its showing the all the data of the specific field)
// app.get('/get-items', (req, res) => {
//     item.find().then(result => res.send(result)).catch(err => console.log(err));
// })

// // Now finding the element by the specific id. (in this case it will show the Rice data for id = 6046814be2778f104d2906e3)
// app.get('/get-item', (req, res) => {
//     item.findById('6046814be2778f104d2906e3').then(result => res.send(result)).catch(err => console.log(err));
// })


// Error Page Always at the end
app.use((req, res) => {
    res.render('error')
        // res.sendFile('./pages/error.html', { root: __dirname });
});
