import express from 'express';
import { authenticate } from '../middlewares/auth.js';
import { addToCart, updateCartItem, removeFromCart } from '../controllers/cartController.js';

const router = express.Router();

// Protect all cart routes
router.use(authenticate);

// POST /cart/add-cart - Add to cart
router.post('/add-cart', addToCart);

// PUT /cart/update/:id - Update cart item
router.put('/update/:id', updateCartItem);

// DELETE /cart/remove/:id - Remove from cart
router.delete('/remove/:id', removeFromCart);

export default router;