const express = require('express');
const router = express.Router();
const orderRequest = require('../model/OrderModel');

router.route("/checkout").post((req, res) => {
    const newOrder = new orderRequest({
        email: req.body.fname,
        customer_name: req.body.lname,
        customer_phone: req.body.email,
        address: req.body.barcode,
        figure_name: req.body.figureName,
        price: req.body.figureGrade,
        quantity: req.body.quantity,
    });

    orderRequest.save()
        .then(() => res.json('Order added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;