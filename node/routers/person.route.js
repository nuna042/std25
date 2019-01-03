const express = require('express');
const router = express.Router();

// Require Item model in our routes module
const Person = require('../models/Person.model');

// Defined store route
router.route('/create').post((req, res) => {
    let person = new Person(req.body);
    person.save()
        .then(item => {
            res.status(200).json({ 'person': 'Person added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

// Defined get data(index or listing) route
router.route('/').get((req, res) => {
    Person.find(function (err, persons) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(persons);
        }
    });
});

// Defined edit route
router.route('/edit/:id').get((req, res) => {
    let id = req.params.id;
    Person.findById(id, function (err, person) {
        res.json(person);
    });
});

//  Defined update route
router.route('/update/:id').post((req, res) => {
    Person.findById(req.params.id, (err, person) => {
        if (!person)
            return next(new Error('Could not load Document'));
        else {
            person.name = req.body.name;
            person.price = req.body.price;

            person.save().then(person => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});

// Defined delete | remove | destroy route
router.route('/delete/:id').get((req, res) => {
    Person.findByIdAndRemove({ _id: req.params.id }, (err, person) => {
        if (err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = router;