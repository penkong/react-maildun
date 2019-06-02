const express = require('express');
// const mongoose = require('mongoose');
// const cookieSession = require('cookie-session'); //to inform express for cookie manager duo to serialize them
const passport = require('passport'); //we tell password keep track of sessions with cookie package
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys')

// // ------- first stage load up guys ------------------
// require('./models/User');
// require('./services/passport'); //logic and helper for auth in google
// //>>-----------DB connection -------------------------
// mongoose.connect(keys.mongoURI , { useNewUrlParser: true });
// //>>---------- Route Games ---------------------------
const app = express();
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  }, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken);
    console.log(refreshToken);
    console.log(profile);
  })
);
app.get('/auth/google', passport.authenticate('google',{
  scope: ['profile', 'email']
}));
app.get('/auth/google/callback', passport.authenticate('google'));
// //.............for encryption cookie .................
// app.use(cookieSession({ //config obj
//   maxAge: 30 * 24 * 60 * 60 * 1000,
//   keys: [keys.cookieKey] //use cookie key for encryption
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// //..... route
// require('./routes/authRoutes')(app); //route for google and exchange code when user back from auth

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));
