const { Schema , model } = require('mongoose');

const orderSchema = new Schema(
    {
        itemId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Item'
        },
        buyer: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        seller: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        bid: {
            type: String,
            required: true,
        },
        accepted: {
            type: Boolean,
            default: null
        }
    }
);

const Order = model('Order', orderSchema);
module.exports = Order;