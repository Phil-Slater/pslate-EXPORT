const mongoose = require('mongoose');

const cableSchema = new mongoose.Schema({

    orderNumber: Number,
    quantity: Number,
    buildInstructions: String,
    // length: String,
    // wireColor: String,
    // connectorColor: String,
    psuModel: String,
    id: Number,
    properties: []

});

const Cable = mongoose.model('Cable', cableSchema);

module.exports = Cable;
