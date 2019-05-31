const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users'); //one arg means fetch 2 means import sth in

//this is that existence user
passport.serializeUser((user, done) => {
  done(null, user.id); //its not profile id.
});

passport.deserializeUser((id, done) => {
  User.findById({ id })
    .then(user => done(null, user))
});


//inform passport to use g strategy
passport.use(new GoogleStrategy({ // i am 'google'
  clientID: keys.googleClientID, //need client id & secret
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback', //=>where we send user back after access permission
  proxy: true
  }, //that profile.id we want in our db
  async (accessToken, refreshToken, profile, done) => { 
    const existUser = await User.findOne({ googleId: profile.id })
      if (existUser) return done(null, existUser);
      const user = await new User({ googleId: profile.id }).save();
      done(null,user);  
    }
  )
);
//after step from authRoutes strategy do this give access token to guys