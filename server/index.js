const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const keys = require('./config/keys');


const app = express();
//inform passport to use g strategy
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback' //=>where we send user back after access permission
  }, accessToken => {
    console.log(accessToken);
  })
); //need client id & secret

app.get('/',(req,res)=>{
  res.send({hi:'there and oheran'});
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));