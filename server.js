const express = require('express');
const app = express();
const PORT = 4000;
const itemsController = require('./controllers/itemsController');


// Config
app.set('view engine', 'ejs');

// Home Route
app.get('/', (req, res) => {
    res.render('index.ejs');
});



// Create Route
app.use('/items', itemsController);
















app.listen(PORT, () => {
    console.log('Server is up and running on port:' + PORT)
});