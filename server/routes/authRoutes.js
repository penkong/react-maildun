const passport = require('passport');

module.exports = app => {
  //it use services/passport new GoogleStrategy
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  //we have the code now
  //exchange code , passport handle for us and catch info see code
  //passport understand now user have code not like first time get req in top
  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout',(req, res) => {
    req.logout(); //by passport;
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
}
