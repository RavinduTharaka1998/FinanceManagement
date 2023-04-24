const mongoose = require('mongoose');
const Schema = mongoose.Schema;


TicketTypes = new Schema({
    tno: {
        type: String
    },
    type: {
        type: String
    },
    price: {
        type: String
    }
}, {
    collation: 'tickettypes'
});

module.exports = mongoose.model('TicketTypes',TicketTypes);