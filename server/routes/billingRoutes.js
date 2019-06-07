//stripe checkout on client side
//stripe npm for node for change token we receive with actual amount in app
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);


//token from client come ad req.body
module.exports = app =>{
  app.post('/api/stripe', async (req,res)=>{
    //now we do real work on api create payment that user pay in client
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 dollar for email',
      source: req.body.id //id of who pay to us
    })
  });
};