const { default: mongoose } = require("mongoose");

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
    location: {
      type: String,
      default: "Shangjai China",
      required: true,
    }
  },
  { timestamps: true } //-> oluşturulma tarihi güncellenme tarihi fln herşey otomatik güncellenir
);

module.exports = mongoose.model("User", UserSchema);
