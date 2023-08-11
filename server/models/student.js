const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  attendance: {
    type: Map,
    of: String,
    default: {},
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
