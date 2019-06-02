//when passport catch info for us from google we immidietly store it in 
//DB
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const mongoose = require('mongoose');
const keys = require('../config/keys');

// const User = mongoose.model('users'); //one arg means fetch 2 means import sth in

//this is that existence user
// passport.serializeUser((user, done) => {
  //   done(null, user.id); //its not profile id.
  // });
  
  // passport.deserializeUser((id, done) => {
    //   User.findById({ id })
    //     .then(user => done(null, user))
    // });
    
//that profile.id we want in our db
//these callback get info for us after user redircet to our app
//these is our chance to get user info after passport get info for us
//from google with code after that redircet from google
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
}));
//inform passport to use g strategy
//it go for app.get('/auth/google')
// i am 'google'
// callback url=>where we send user back after access permission
// passport.use(new GoogleStrategy({ 
//   clientID: keys.googleClientID, 
//   clientSecret: keys.googleClientSecret,
//   callbackURL: '/auth/google/callback', 
//   proxy: true
//   }, 
//   async (accessToken, refreshToken, profile, done) => { 
//     const existUser = await User.findOne({ googleId: profile.id })
//     if (existUser) return done(null, existUser);
//     const user = await new User({ googleId: profile.id }).save();
//     done(null,user);  
//   }
//   )
//   );

//after step from authRoutes strategy do this give access token to guys