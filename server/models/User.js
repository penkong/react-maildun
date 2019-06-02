const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

//mongo collection
mongoose.model('users', userSchema);