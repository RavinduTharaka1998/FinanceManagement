const mongoose = require('mongoose');
const Schema = mongoose.Schema;


Expensess = new Schema({
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
    collation: 'expensess'
});

module.exports = mongoose.model('Expensess',Expensess);