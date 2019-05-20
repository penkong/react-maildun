const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy; //we want only this prop

const app = express();
//inform passport to use g strategy
passport.use(new GoogleStrategy()); //need client id & secret

app.get('/',(req,res)=>{
  res.send({hi:'there and oheran'});
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log('listening on'));