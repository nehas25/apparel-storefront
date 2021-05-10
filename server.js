const { urlencoded } = require('express');
const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;
const itemsController = require('./controllers/itemsController');
const db = require('./models');


// Config
app.set('view engine', 'ejs');


//Middleware
app.use(express.static(__dirname + '/public'));

//parse request body
app.use(express.urlencoded( { extended: false }));

//method override
app.use(methodOverride('_method'));

// Create Route
app.use('/items', itemsController);

// Home Route
app.get('/', (req, res) => {
    db.Item.find({}, (err, allItems) => {
        if(err) return console.log(err);
        res.render('index.ejs', { allItems });
    })
});

app.listen(PORT, () => {
    console.log('Server is up and running on port:' + PORT)
});