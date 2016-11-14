var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = mongoose.Schema({
    username: String,
    items: Array,
    specialInstructions: String,
    selectedShop: String,
    selectedShop_id: String,
    favorited: Boolean,
    date: String,
    time: String,
    timeUntilArrival: String,
    secondsUntilArrival: Number,
    timeSelectedForPickup: String,
    completed: Boolean
});

var Orders = mongoose.model('Order', orderSchema);

module.exports = Orders;
