const mongoose = require('mongoose');

const cableSchema = new mongoose.Schema({

    orderNumber: Number,
    rushOrder: String,
    quantity: Number,
    buildInstructions: String,
    psuModel: String,
    id: Number,
    properties: [],
    title: String,

});

const Cable = mongoose.model('Cable', cableSchema);

module.exports = Cable;
