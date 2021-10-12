/* 
 * @file bizContact.js
 * @author Allen Day / ZEZHAO DAI
 * @student_id 301136181
 * @date sept/30/2021
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const contact = mongoose.model('Business Contact', userSchema);
module.exports = contact;