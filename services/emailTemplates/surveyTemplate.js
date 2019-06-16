const keys = require('../../config/keys');
module.exports = survey => {
  return `  
    <html>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Kanit|Roboto&display=swap" rel="stylesheet">
      </head>
      <body class="bg-near-white">
        <div class="w-90 w-70-m w-50-l tc center ma0">
          <h3 class="f3 f2-l white bg-dark-blue ba br4 b--dark-blue bw1 mv2 pa2" style="font-family: Kanit">
            Sweet Survey
          </h3>
          <div class="flex flex-column items-center justify-center" style="font-family: Roboto">
            <p class="f5 f3-l">Please answer the following questions: </p>
            <p class="f6 f4-l mv3 mb4">${survey.body}</p>
            <div class="flex mt3">
              <div class="dib f6 f4-m f4-l fw1 normal-l bg-navy hover-bg-green br-pill grow mr3 ph4 pv2">
                <a class="no-underline link white" href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
              </div>
              <div
                class="dib f6 f4-m f4-l fw2 normal-l white hover-red bg-red hover-bg-white ba br-pill b--red no-underline grow ml3 ph4 pv2">
                <a class="no-underline link white hover-red" href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

//"forever start --minUptime 1000 --spinSleepTime 1000 sendgrid_webhook.js