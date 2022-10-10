const express = require('express');
require('dotenv').config();

const connectDB = require('./config/database');

const PORT = process.env.PORT;

const app = express();

// Body Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/index'));
app.use('/', require('./routes/mail'));
app.use('/api', require('./routes/urls'));

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started on ${PORT}`);
});
