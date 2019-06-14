const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
module.exports = app => {
  //it use services/passport new GoogleStrategy
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));
  //we have the code now
  //exchange code , passport handle for us and catch info see code
  //passport understand now user have code not like first time get req in top
  //passport middle ware take out code for us 
  app.get('/auth/google/callback', passport.authenticate('google'), (req,res)=>{
    res.redirect('/surveys');
  });

  app.get('/api/logout',(req, res) => {
    req.logOut(); //func attached to req obj by passport;
    // res.send(req.user);
    req.session = null;
    res.redirect('/');
  });
  // these req user come after passport work done
  app.get('/api/current_user', (req, res) => {
    // all passport work com in this obj
    //cookie session give here >> req.session >> passport look at req.session 
    //>> pass to deserialize >> app find us on deb >> app know us
    //---------------------------------------------------------
    // express-session (store a reference to session >> session id >> session store 
    //>> it have much info than other) === cookie-session (cookie is the session)
    //as soon as app run we req to this route to send if user is and save to redux store and from there pass as state to header
    res.send(req.user);
  });
}
