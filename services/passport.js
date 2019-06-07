//when passport catch info for us from google we immediately store it in 
//DB
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop
const mongoose = require('mongoose');
const keys = require('../config/keys');


//we do not require model because it cause test lib in trouble
//one arg means <fetch> 2 means import sth in
const User = mongoose.model('users'); 
//....................................................
//-------after passport done we set final step set cookie----
//existence user > generate token-cookie with serialize > pass to passport
//its not profile id. its id from db
passport.serializeUser((user, done) => {
  done(null, user.id); 
});
// id == exact token we pass user id
//first thing play when user come to app
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => done(null, user))
}); 
//=========>> now after seri and deseri we must inform passport to use cookie
//...........................................................
//that profile.id we want in our db
//these callback get info for us after user redircet to our app
//these is our chance to get user info after passport get info for us
//from google with code after that redircet from google
//inform passport to use g strategy
//it go for app.get('/auth/google')
// i am 'google'
// callback url=>where we send user back after access permission
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, //we take info profile by passport and save it in db 
async (accessToken, refreshToken, profile, done) => {
  //query to db is promise 
  const existUser = await User.findOne({ googleId: profile.id })
  if (existUser) return done(null, existUser); //er,record >> pass to serialize
  const user = await new User({ googleId: profile.id }).save();
  done(null,user);  //inform passport finish >> pass to serialize
}));
//after step from authRoutes strategy do this give access token to guys

// ----))))+++++======>>> finally all of this add to user 
//......................  req object and need new route