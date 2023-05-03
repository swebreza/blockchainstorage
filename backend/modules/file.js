const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    // required: true
  },
  type: {
    type: String,
    // required: true
  },
  uploadDate: {
    type: Date,
    required: true,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
