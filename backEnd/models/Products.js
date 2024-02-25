const { default: mongoose } = require("mongoose");

const ProductsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    supplier: {
      type: String,
      required: true,
    },
    price:{
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    product_location: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } //-> oluşturulma tarihi güncellenme tarihi fln herşey otomatik güncellenir
);

module.exports = mongoose.model("Products", ProductsSchema);
