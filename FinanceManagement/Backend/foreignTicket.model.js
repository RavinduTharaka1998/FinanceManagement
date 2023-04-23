const mongoose = require('mongoose');
const Schema = mongoose.Schema;


ForeignTickets = new Schema({
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
    collation: 'foreigntickets'
});

module.exports = mongoose.model('ForeignTickets',ForeignTickets);