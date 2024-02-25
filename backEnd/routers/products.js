const router = require('express').Router();
const productController = require('../controllers/productsControllers');


router.get('/', productController.getAllProduct);
router.post('/', productController.createProducts);
router.get('/:id', productController.getProduct);
router.get('/search/:key', productController.searchProduct);

module.exports = router;
