const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const keys = require('./config/keys');


const app = express();
//inform passport to use g strategy
passport.use(new GoogleStrategy({ // i am 'google'
  clientID: keys.googleClientID, //need client id & secret
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //=>where we send user back after access permission
  }, (accessToken,refreshToken,profile,done) => {//after step below strategy do this
    console.log('1'+accessToken);
    console.log('2'+refreshToken);
    console.log('3'+profile);
  })
); 

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile','email']
}));//we have the code now
//exchange code 
app.get('/auth/google/callback', passport.authenticate('google'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));