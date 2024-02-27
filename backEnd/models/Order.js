const { default: mongoose } = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    customerId: {
      type: String,
      required: true,
    },
    productId: {
      //-> product id nin tablosunu direk buraya çağırıyoruz
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    subtotal: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 1,
    },
    delivery_status: {
      type: Number,
      default: "pending",
    },
    payment_status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
