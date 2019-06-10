const keys = require('../../config/keys');
module.exports = survey => {
  return `  
    <html>
      <body>
        <div style="text-align:center;">
          <h3>I'd like your input!</h3>
          <p>Please answer the following questions: </p>
          <p>${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};

//"forever start --minUptime 1000 --spinSleepTime 1000 sendgrid_webhook.js