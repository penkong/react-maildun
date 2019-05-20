const express = require('express');
require('./services/passport'); //logic and helper for auth in google



const app = express();
require('./routes/authRoutes')(app); //route for google 

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));