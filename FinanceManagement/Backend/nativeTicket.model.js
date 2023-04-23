const mongoose = require('mongoose');
const Schema = mongoose.Schema;


NativeTickets = new Schema({
    rnumber: {
        type: String
    },
    adult: {
        type: String
    },
    child: {
        type: String
    },
    aprice: {
        type: String
    },
    cprice: {
        type: String
    },
    total: {
        type: String
    },
    date: {
        type: String
    }
}, {
    collation: 'nativetickets'
});

module.exports = mongoose.model('NativeTickets',NativeTickets);