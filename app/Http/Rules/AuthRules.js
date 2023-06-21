const { body } = require("express-validator");

const Login = [
  body("username", "field email can't be null").exists(),
  body("password", "field password can't be null").exists(),
];

const Register = [
  body("email", "field email can't be null").exists(),
  body("password", "field password can't be null").exists(),
  body("username", "field password can't be null").exists(),
  body("fullname", "field password can't be null").exists(),
];

const ResetPassword = [body("email", "field email can't be null").exists()];

const ChangePassword = [
  body("old_password", "field old_password can't be null").exists(),
  body("new_password", "field new_password can't be null").exists(),
  body("confirm_password", "field confirm_password can't be null").exists(),
];

module.exports = { Login, Register, ResetPassword, ChangePassword };
