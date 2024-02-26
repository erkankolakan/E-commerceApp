const Products = require("../models/Products");

module.exports = {
  createProducts: async (req, res) => {
    const newProduct = new Products(req.body);
    try {
      const product = await newProduct.save();
      res.status(200).json("products created successfully");
    } catch (err) {
      res.status(500).json("failed to create the product");
    }
  },

  getAllProduct: async (req, res) => {
    try {
      // const products = await Products.find(); /-> hepsini getir demek
      const products = await Products.find().sort({ _id: -1 });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }
  },

  getProduct: async (req, res) => {
    try {
      const product = await Products.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json("failed to get the product");
    }
  },

  searchProduct: async (req, res) => {
    try {
      const result = await Products.aggregate([
        [
          {
            $search: {
              index: "e-commerceapp",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*",
                },
              },
            },
          },
        ],
      ]);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }
  },
};
