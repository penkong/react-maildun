
const passport = require('passport');

module.exports = app => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  })); //we have the code now
  //exchange code 
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout',(req, res) => {
    req.logout(); //by passport;
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
