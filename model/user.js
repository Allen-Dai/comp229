/* 
 * @file user.js
 * @author Allen Day / ZEZHAO DAI
 * @student_id 301136181
 * @date sept/30/2021
 */

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;