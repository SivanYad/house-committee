const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tenantchema = new Schema({
    name: {
        type: String,
        required: true
    },
    apartment: {
        type: Number,
        required: true
    },
    floor: {
        type: Number,
        required: true
    },
    isRented: {
        type: Boolean,
        required: true
    },
    owner: {
        type: String,
        required: function () { return this.isRented.type === true }
    },
    contact: {
        type: [{}],
        required: true
    },
    didPay: {
        type: Boolean,
        required: true
    },
    paidAmount: {
        type: Number,
        required: function () { return this.didPay.type === true }
    }
});

let tenant = mongoose.model("tenant", tenantchema);

module.exports = tenant;
