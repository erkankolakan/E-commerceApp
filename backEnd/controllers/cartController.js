const Products = require("../models/Products");
const Cart = require("../models/Cart");

module.exports = {
  addTocart: async (req, res) => {
    const { userId, cartItem, quantity } = req.body; //-> req.body den gelen değerler arasından sadece kullanacağı değerleri alıyor
    try {
      const cart = await Cart.findOne({ userId });
      if (cart) {
        const existingProduct = cart.products.find(
          (product) => product.cartItem.toString() === cartItem //-> Bu kısım, mevcut ürünleri kontrol etmek için bir dizi içindeki ürünler üzerinde döngü yapılmasını sağlar.
        );
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          cart.products.push({ cartItem, quantity });
        }
        await cart.save();
        res.status(200).json("Product added to cart");
        // burda temel olarak yapılan çok basit aslında gelen userId ye bakar kullanıcının bir kartı var mı diye bakılır daha sonrasında kartı var ise karta ekleği ürün kartın içinde var mı diye bakılır eğer eklediği ürün kartın içinde varsa quantity değerini bir arttırır eğer ilgili ürün kartın içinde yoksa o ürünü kartın içine pushlar
      } else {
        const newCart = new Cart({
          userId,
          products: [
            {
              cartItem,
              quantity: quantity,
            },
          ],
        });
        await newCart.save();
        res.status(200).json("Product added to cart");
        // kullanıcının hiç kartı yoksada durumundada, kullanıcıya bir kart oluşturuyoruz
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getCart: async (req, res) => {
    // burayı anlamadım
    const userId = req.params.id;
    try {
      const cart = await Cart.find({ userId }).populate(
        "products.cartItem",
        "_id title imageUrl price supplier"
      ); //->populate ile cartItem ın içindeki id ye göre products içindeki cartItem ı dolduruyoruz

      res.status(200).json(cart);
    } catch (error) {
      res.status(200).json(error);
    }
  },

  deleteCartItem: async (req, res) => {
    const cartItemId = req.params.cartItem;
    try {
      const updatedCart = await Cart.findOneAndUpdate(
        { "products._id": cartItemId },
        { $pull: { products: { _id: cartItemId } } },
        { new: true }
      );
      if (!updatedCart) {
        return res.status(404).json("Cart ıtem not found");
      }

      res.status(200).json(updatedCart);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  decrementCartItem: async (req, res) => {
    const { userId, cartItem } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        res.status(404).json("Cart not found");
      }

      const existingProduct = cart.products.find(
        (product) => product.cartItem.toString() === cartItem //-> gezindiği ürün bilgisi ile gelen ürün bilgisi eşitse
      );

      if (!existingProduct) {
        return res.status(404).json("Product not found");
      }

      if (existingProduct.quantity === 1) {
        cart.products = cart.products.filter(
          (product) => product.cartItem.toString() !== cartItem
        );
      } else {
        existingProduct.quantity -= 1;
      }

      await cart.save();

      if (existingProduct.quantity === 0) {
        await Cart.updateOne({ userId }, { $pull: { products: { cartItem } } });
      }
      res.status(200).json("Product updated");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};
