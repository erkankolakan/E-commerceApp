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
      const products = await Products.find();
      res.status(200).json("products created successfully");
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
  
  searchProduct: async (req, res ) => {
    try {
      const result = await Productsaggregate(
        [
          {
            $search: {
              index: "e-commerceapp",
              text: {
                query: req.params.key,
                path: {
                  wildcard: "*"
                }
              }
            }
          }
        ]
      )
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json("failed to get the products");
    }  
  }
};
