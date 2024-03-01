const router = require('express').Router();
const orrdersController = require('../controllers/orderControllers');

router.get("/:id", orrdersController.getUserOrders)

module.exports = router