const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //one arg means fetch 2 means import sth in
//inform passport to use g strategy
passport.use(new GoogleStrategy({ // i am 'google'
  clientID: keys.googleClientID, //need client id & secret
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //=>where we send user back after access permission
}, //that profile.id we want in our db
(accessToken, refreshToken, profile, done) => { 
  
  new User({ googleId: profile.id }).save();
}));
//after step from authRoutes strategy do this give access token to guys