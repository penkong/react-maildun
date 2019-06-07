const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//remember cause of testing we use this import method.
const Survey = mongoose.model('surveys');
module.exports = app => {
  //create survey and send out big email out
  app.post('/api/surveys', requireLogin, requireCredits, (req,res)=>{
    const { title, subject, body, recipients } = req.body;
    //1 > define what email have
    const survey = new Survey({
      title, 
      body, 
      subject, 
      recipients: recipients.split(',').map(email => ({ email: email.trim() })),
      _user: req.user.id, //id by mongoose generated.
      dateSent: Date.now()
    });
    //2 > define email template 

    // 1 + 2 > generate mailer object 
    // send mailer to api provider for email

    //webhook when some outer api do some process and give our app some type of info and notice
    // some callback that event happened. api/surveys/webhooks
  });
};