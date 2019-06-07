const mongoose = require('mongoose');

const { Schema } = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], //sub document collection
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0},
  _user: { //setup a relation ship _ means ref field
    type: Schema.Types.ObjectId, //it show its ref
    ref: 'User'
  },
  dateSent: Date,
  lastResponded: Date
});

//mongo collection
mongoose.model('surveys', surveySchema);