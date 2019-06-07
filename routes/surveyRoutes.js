const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//remember cause of testing we use this import method.
const Survey = mongoose.model('surveys');
module.exports = app => {
  //create survey and send out big email out
  app.post('/api/surveys', requireLogin, requireCredits, (req,res)=>{
    const { title, subject, body, recipients } = req.body;
    const survey = new Survey({
      title, 
      body, 
      subject, 
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id, //id by mongoose generated.
      dateSent: Date.now()
    });

  });
};