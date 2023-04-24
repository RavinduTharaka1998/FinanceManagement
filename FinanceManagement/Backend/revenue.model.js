const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Revenues = new Schema({
    id: {
        type: String
    },
    type: {
        type: String
    },
    date: {
        type: String
    },
    amount: {
        type: String
    }
}, {
    collation: 'revenues'
});

module.exports = mongoose.model('Revenues',Revenues);