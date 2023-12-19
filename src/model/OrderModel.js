const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email: String,
    address: String,
    customer_name: String,
    customer_phone: String,
    figure_name: String,
    price: String,
    quantity: String,

});

const orderRequest = mongoose.model('orderRequest', orderSchema);

module.exports = orderRequest;