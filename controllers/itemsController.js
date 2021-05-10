const express = require('express');
const router = express.Router();
const db = require('../models');

//To show form to create item
router.get('/new', (req, res) => {
    res.render('items/itemsNew');  
});

// Show item
router.get('/:id', (req, res) => {
    db.Item.findById(req.params.id, (err, foundItem) => {
        if(err) return console.log(err);
        res.render('items/itemsShow', { foundItem });
    });
});

//Create route
router.post('/', (req, res) => {
    db.Item.create(req.body, (err, createdItem) => {
        if(err) return console.log(err);
        res.redirect(`/items/${createdItem._id}`);
    })
});

//delete item
router.delete('/:id', (req, res) => {
    db.Item.findByIdAndDelete(req.params.id, (err) => {
        if(err) return console.log(err);
        res.redirect('/');
    });
});

// Show edit form
router.get('/:id/edit', (req, res) => {
    db.Item.findById(req.params.id, (err, selectedItem) => {
        res.render('items/itemsEdit', { selectedItem });
    });
});

//Edit item 
router.put('/:id', (req, res) => {
    db.Item.findByIdAndUpdate(
        req.params.id, 
        req.body,
        { new: true },
        (err, updatedItem) => {
            if(err) { return res.send(err) }
            res.redirect(`/items/${req.params.id}`);
        })
});

module.exports = router;