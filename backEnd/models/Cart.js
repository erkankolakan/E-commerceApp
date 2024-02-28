const { default: mongoose } = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        cartItem: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Products",
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  },
  { timestamps: true } //-> oluşturulma tarihi güncellenme tarihi fln herşey otomatik güncellenir
);

module.exports = mongoose.model("Cart", CartSchema);
