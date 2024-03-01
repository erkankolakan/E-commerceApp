const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

module.exports = {
  createUser: async (req, res) => {
    try {
      const user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
        location: req.body.location,
      });
      res.status(201).json({ message:"User successfully created", user});
    } catch (error) {
      res.status(500).json({ message: error });
    }

  },

  loginUser: async(req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      !user && res.status(401).json("Wrong email or password");

      const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== req.body.password && res.status(401).json("Wrong email or password");

      const accessToken = jwt.sign(
        { id: user._id, isAdmin: user.isAdmin },
        process.env.SECRET_KEY,
        { expiresIn: "5d" }
      );
                                                                         
      const { password, ...info } = user._doc;
      res.status(200).json({ ...info, accessToken });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  },
};
