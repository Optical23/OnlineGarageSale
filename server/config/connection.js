const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/garage-sale',
  err => {
    if(err) throw err;
    console.log('Connected to MongoDB!')
  }
);

module.exports = mongoose.connection;
// Mongoose 6 has these automatically
//  useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,