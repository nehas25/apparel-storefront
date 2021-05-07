const express = require('express');
const router = express.Router();

//Create route
router.get('/new', (req, res) => {
    res.render('items/itemsNew');  
})








module.exports = router;