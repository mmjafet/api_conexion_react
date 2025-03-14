const express = require('express');
const { connectDB } = require('../data/config');
const tareasRoutes = require('../routes/tareasRoutes');

const app = express();

connectDB();

app.use(express.json());
app.use('/api', tareasRoutes);

module.exports = app;