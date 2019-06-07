const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

//helper.mail is obj that take a lot of configuration
class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content){
    super();
    this.sgApi = sendgrid(keys.sendGridKey); //to send all of this to sendgrid
    //who this email appears to sent from (us)
    this.from_email = new helper.Email('no-reply@emaily.com');
    this.subject = subject;
    this.body = new helper.Content('text/html', content);
    this.recipients = this.formatAddresses(recipients);
    // built in from Mail add content
    this.addContent(this.body);
    //by us =>
    //enable click tracking inside email
    this.addClickTracking();
    this.addRecipients();
  }
  formatAddresses(recipients){
    return recipients.map(({email}) => {
      return new helper.Email(email);
    });
  }
  addClickTracking(){
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);
    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  }
  addRecipients(){
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => { //this recipient come from formatAddresses
      personalize.addTo(recipient);
    })
    this.addPersonalization(personalize);
  }
  async send(){
    const request = this.sgApi.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: this.toJSON()
    });
    const response = await this.sgApi.API(request);
    return response;
  }
}


module.exports = Mailer;