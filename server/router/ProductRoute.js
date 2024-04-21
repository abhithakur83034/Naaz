const express = require('express');
const ProductController = require('../controller/ProductController');
const upload = require('../services/MulterUpload');
const UserAuth = require('../middleware/UserAuth')
const router = express.Router();


router.post('/add-products',UserAuth.checkRole('ADMIN'),upload.single('image'),ProductController.addProducts);
router.get('/get-products',ProductController.getProducts);
router.get('/get-product/:id',ProductController.getSingleProduct);
router.delete('/delete-products',UserAuth.requireAuth,UserAuth.checkRole('ADMIN'),ProductController.deleteProducts)
router.delete('/delete-product/:id',UserAuth.requireAuth,UserAuth.checkRole('ADMIN'),ProductController.deleteSingleProduct)
router.put('/update-product/:id',UserAuth.requireAuth,UserAuth.checkRole('ADMIN'),upload.single("image"),ProductController.updateProduct)

module.exports = router;
