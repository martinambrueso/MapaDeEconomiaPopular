const userService = require('../services/user')

exports.loginService = (req, res) => {
    userService.login(req, res)
}

exports.signupService = (req, res) => {
    userService.signUp(req, res)
}