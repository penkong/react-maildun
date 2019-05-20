const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')
require('./services/passport'); //logic and helper for auth in google

//>>-----------DB connection -------------------------
mongoose.connect(keys.mongoURI , { useNewUrlParser: true });

const app = express();
require('./routes/authRoutes')(app); //route for google 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));