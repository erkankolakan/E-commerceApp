const User = require("../models/User");

module.exports = {
  deleteUser: async (req, res) => {
    try {
      const user = await User.findByIdAndDelete(req.params.id); //-> burada findMyDelete oldukça önemli (!!!BUL VE SİL!!!)
      res.status(200).json("Sucessfully Deleted");
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUser: async (req, res) => {
    //-> :paramsdan alından değer post olarak değil get olarak alınır.
    try {
      const user = await User.findById(req.params.id);

      if (!user) {
        return res.status(401).json("User not found" );
      }

      const { password, __v, createdAt, updateAt, ...userData } = user._doc;

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
