const Router = require("express").Router();
const AuthController = require("../../app/Http/Controller/AuthController");
const ApiAuth = require("../../app/Http/Middleware/ApiAuth");
const Validator = require("../../app/Http/Middleware/Validator");
const AuthRules = require("../../app/Http/Rules/AuthRules");

Router.post("/login", [AuthRules.Login, Validator], AuthController.login)
  .post("/register", [AuthRules.Register, Validator], AuthController.register)
  .get("/verify", [ApiAuth], AuthController.verify)
  .post(
    "/reset-password",
    [AuthRules.ResetPassword],
    AuthController.resetPassword
  )
  .post(
    "/change-password",
    [AuthRules.ChangePassword],
    AuthController.changePassword
  );

module.exports = Router;
