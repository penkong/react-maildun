const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
//remember cause of testing we use this import method.
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');
module.exports = app => {
  app.get('/api/surveys/thanks',(req,res)=>{
    res.send('thanks for voting');
  })
  //create survey and send out big email out
  app.post('/api/surveys', requireLogin, requireCredits, async (req,res)=>{
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

    // 1 + 2 > generate mailer(services) object >> this.toJSON()
    // send mailer to api provider for email
    //Great place to send email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    //after creation Mailer.js
    try { //try catch is error handler for multi await
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }


    //webhook when some outer api do some process and give our app some type of info and notice
    // some callback that event happened. api/surveys/webhooks
  });
};