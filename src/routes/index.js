const express = require('express');
const cityRouter = require('./city.router');
const productRouter = require('./product.router');
const userRouter = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use(cityRouter);
router.use(productRouter);
router.use(userRouter);

module.exports = router;
