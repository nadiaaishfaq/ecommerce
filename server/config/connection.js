const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const url = process.env.DB;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`connection successful`);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection failed'))

module.exports = mongoose