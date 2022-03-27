const mongoose = require('mongoose');

<<<<<<< HEAD
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/garage-sale', {
=======
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/onlinegaragesale', {
>>>>>>> develop
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

module.exports = mongoose.connection;
