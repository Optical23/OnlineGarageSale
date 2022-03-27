const { Schema , model } = require('mongoose');

const opts = {toJson: {virtuals: true, getters: true}};
const storeSchema = new Schema( 
    {
        store_name: {
            type: String,
            unique: true,
            require: true,
            minlength: 3,
            maxlength: 50
        },
        owner: {
            type: String,
            require: true
        },
        description: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        public: {
            type: Boolean,
            default: false
        },
        items: [itemSchema],
    }, opts
);

storeSchema.virtual('items_length').get(function() {
    return this.items.length;
})

const Store = model('Store', storeSchema);
module.exports = Store;