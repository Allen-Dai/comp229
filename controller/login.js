const user = require('../model/user')

const login = async (req, res) => {
    const userExist = await user.findOne({username: req.body.username, password: req.body.password}).exec()

    if (userExist != null){
        return res.redirect('/secure')
    }   
    return res.redirect('/login')
}

const index = (req, res) => {
    res.render('auth/login', {title: 'Login'})
}

module.exports = {login, index};