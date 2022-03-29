const { Schema, model } = require('mongoose');

const itemSchema = new Schema(
    {
        item_name: {
            type: String,
            required: true,
            minlength: 3
        },
        description: {
            type: String,
            maxlength: 130
        },
        condition: {
            type: String,
            required: true
        },
        asking_price: {
            type: String,
            required: true
        },
        storeId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Store'
        },
        sold: {
            type: Boolean,
            default: false
        }
    }
);

const Item = model('Item', itemSchema);
module.exports = Item;