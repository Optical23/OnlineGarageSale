const { Schema , model } = require('mongoose');
const bcrypt = require('bcrypt');

const opts = {toJson: {virtuals: true}};
const userSchema = new Schema(
    {
        full_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'NOT A VALID EMAIL ADDRESS']
        },
        password: {
            type: String,
            required: true, 
            minlength: 6
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        store: {
            type: Schema.Types.ObjectId,
            ref: 'Store'
        },
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Order'
            }
        ]
    }, opts
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};
  

userSchema.virtual('first_name').get(function() {
    return this.fullName.slice(0, this.email.indexOf(' '));
});

userSchema.virtual('purchases_length').get(function() {
    return this.purchases.length;
});

const User = model('User', userSchema);
module.exports = User;