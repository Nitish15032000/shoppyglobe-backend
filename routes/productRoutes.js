import express from 'express';
import { getProducts, getProductById, addProduct } from '../controllers/productController.js';

const router = express.Router();

// GET /products - Get all products
router.get('/', getProducts);

// GET /products/:id - Get single product by ID
router.get('/:id', getProductById);

// POST /products/add-product - Create a new product (protected route, requires admin authentication but not implemented here)
router.post('/add-product', addProduct );

export default router;