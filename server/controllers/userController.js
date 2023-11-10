const { User } = require("../models/index");
const { convertPayloadToToken } = require("../helpers/jwt");

class userController {
  static async register(req, res, next) {
    try {
      const { email } = req.body;
      const data = await User.findOne({ where: { email } });
      if (data) {
        res.status(400).json({
          message: "Email already exist",
        });
      } else {
        await User.create({
          email,
        });
        res.status(201).json({
          message: "Sign up success",
        });
      }
    } catch (err) {
      if (err.name === "SequelizeValidationError") {
        res.status(400).json({
          message: err.errors[0].message,
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  }
  static async login(req, res, next) {
    try {
      const { email } = req.body;
      if (!email) {
        throw { name: "EMAIL_REQUIRED" };
      }
      const data = await User.findOne({
        where: {
          email,
        },
      });
      if (!data) {
        throw { name: "INVALID_LOGIN" };
      }
      const access_token = convertPayloadToToken({
        id: data.id,
        email: data.email,
      });
      res.status(200).json({
        message: "Login success",
        token: access_token,
      });
    } catch (err) {
      if (err.name === "INVALID_LOGIN") {
        res.status(401).json({
          message: "Email doesn't exist",
        });
      } else if (err.name === "EMAIL_REQUIRED") {
        res.status(400).json({
          message: "Email is required",
        });
      } else {
        res.status(500).json({
          message: "Internal Server Error",
        });
      }
    }
  }
}

module.exports = userController;
