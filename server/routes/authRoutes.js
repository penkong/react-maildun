
const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })); //we have the code now
  //exchange code 
  app.get('/auth/google/callback', passport.authenticate('google'));
}
