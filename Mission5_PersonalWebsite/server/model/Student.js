const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    student_id: {
        type: Number,
        required: true
    },
    major: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Student', studentSchema);