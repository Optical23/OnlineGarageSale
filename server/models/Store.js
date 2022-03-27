const { Schema , model } = require('mongoose');

const opts = {toJson: {virtuals: true, getters: true}};
const storeSchema = new Schema( 
    {
        store_name: {
            type: String,
            require: true,
            minlength: 3,
            maxlength: 50
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        description: {
            type: String,
            
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
        items: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Item'
            }
        ],
    }, opts
);

storeSchema.virtual('items_length').get(function() {
    return this.items.length;
})

const Store = model('Store', storeSchema);
module.exports = Store;