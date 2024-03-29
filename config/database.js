const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Connected');
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = connectDB;
