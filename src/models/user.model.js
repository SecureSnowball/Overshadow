const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name can\'t be smaller than 2 characters'],
    maxlength: [64, 'Name can\'t be greater than 64 characters'],
  },
}, {
  timestamps: true,
});

const User = mongoose.model('User', schema);

module.exports = User;
