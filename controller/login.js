/* 
 * @file login.js
 * @author Allen Day / ZEZHAO DAI
 * @student_id 301136181
 * @date sept/30/2021
 */

const user = require('../model/user')

const login = async (req, res) => {
    /**
     * Verify if the user is entered the correct username and password, then redirect to secure page or login page if not.
     */

    const userExist = await user.findOne({username: req.body.username, password: req.body.password}).exec()

    if (userExist != null){
        return res.redirect('/secure')
    }   
    return res.redirect('/login')
}

const index = (req, res) => {
    /**
     * Return login page
     * 
     */

    res.render('auth/login', {title: 'Login'})
}

module.exports = {login, index};