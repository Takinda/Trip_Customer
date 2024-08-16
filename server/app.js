const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const logger = require('morgan');


const registerRouter = require('./routes/registerRouter');
const loginRouter = require('./routes/loginRouter')

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));

// Routes
app.get('/api', (req, res) => {
  res.json({ message: "hello" });
});
app.use('/api/register', registerRouter);
app.use('/api/login', loginRouter);

// Default route
app.get('*', (req, res) => {
    res.status(404).send('Not Found');
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});