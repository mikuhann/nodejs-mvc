const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: String,
  secondName: String,
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  age: String,
  team: String
});

module.exports = mongoose.model('user', UserSchema);
