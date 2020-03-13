const express = require('express');
require('./db/mongoose');
const userRouter = require('./router/user');

const app = express();

app.use(express.json());
app.use(userRouter);
app.get('/', (req, res) => res.send('Hello World!'));

module.exports = app;
