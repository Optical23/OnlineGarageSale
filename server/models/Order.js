const { Schema , model } = require('mongoose');

const orderSchema = new Schema(
    {
        item: {
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
        created_at: {
            type: String,
        },
        bid: {
            type: Schema.Types.Decimal128,
            required: true,
        },
        accepted: {
            type: Boolean,
            default: false
        }
    }
);

const Order = model('Order', orderSchema);
module.exports = Order;