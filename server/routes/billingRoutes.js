//stripe checkout on client side
//stripe npm for node for change token we receive with actual amount in app
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);



module.exports = app =>{
  app.post('/api/stripe',(req,res)=>{

  });
};