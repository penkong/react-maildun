//---------HELPER METHOD AND BUSINESS LOGIC IN THIS FILE
//............................................................
const express = require('express');
const mongoose = require('mongoose');
//to inform passport for cookie duo to serialize and not token or what ever
const cookieSession = require('cookie-session'); 
//we tell password keep track of user-sessions with cookie package
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

// // ------- first stage load up guys ------------------
require('./models/User');
require('./services/passport'); 
// //>>-----------DB connection -------------------------
mongoose.connect(keys.mongoURI , { useNewUrlParser: true });
// //>>---------- Route Games ---------------------------
const app = express();
//.............for cookie register on passport.................
app.use(cookieSession({ //config obj
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey] //use cookie key for encryption
}));
app.use(passport.initialize()); //inform
app.use(passport.session()); //inform use to cookie

//................. routes......................
//route for google and exchange code when user back from auth
require('./routes/authRoutes')(app); 
//..................server run .........................
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));
