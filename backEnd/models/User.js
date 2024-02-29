const { default: mongoose } = require("mongoose");

// {
//   "username": "Erkan Kolakan",
//   "email": "selamssnya@gmail.com",
//   "password": "kolakan21",
//   "location": "Diyarbakırr"
// }


const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, //-> data aynı isimden bir tane daha olmaz benzersiz isimler olması gerekir. ID gibi
    },
    password: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      default: "Shangjai China",
      required: true,
    }
  },
  { timestamps: true } //-> oluşturulma tarihi güncellenme tarihi fln herşey otomatik güncellenir
);

module.exports = mongoose.model("User", UserSchema);
