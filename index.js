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
//when you post sth on express it does not auto parse need module
const bodyParser = require('body-parser');
// // ------- first stage load up guys ------------------
require('./models/User');
require('./models/Survey');
require('./services/passport'); 
// //>>-----------DB connection -------------------------
mongoose.connect(keys.mongoURI , { useNewUrlParser: true });
// //>>---------- Route Games ---------------------------
const app = express();
//.............middle for parse income req for express.........
app.use(bodyParser.json());
//.............middle for cookie register on passport.................
app.use(cookieSession({ //config obj
  maxAge: 4 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey] //use cookie key for encryption
}));
app.use(passport.initialize()); //inform
//inform use to cookie
app.use(passport.session({
    secret: keys.cookieKey,
    saveUninitialized: false,
    resave: false,
}));

//................. routes......................
//route for google and exchange code when user back from auth
require('./routes/authRoutes')(app); 
//route for billing with stripe token come from client
require('./routes/billingRoutes')(app); 
require('./routes/surveyRoutes')(app); 
//route for let react-router make decision
if(process.env.NODE_ENV === 'production'){
  //express serve production assets like main .js
  //go there for anything requested
  app.use(express.static('client/build')); 
  //express will server index.html if does not recognize route
  const path = require('path');
  //catch all case
  app.get('*', (req,res)=>{
    //if i don't understand react-router will handle it
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}

//..................server run .........................
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));
