# ShoppyGlobe E-commerce Backend API

## Description
This is the backend API for ShoppyGlobe e-commerce platform built with Node.js, Express, and MongoDB.

## Features
- Product management
- Shopping cart functionality
- User authentication with JWT

## API Endpoints

### Authentication
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login user

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get single product by ID
- `GET /products/add=product` - add the product or also i can implement admin Authentication later

### Cart (Requires Authentication)
- `POST /cart/add-cart` - Add product to cart
- `PUT /cart/update/:id` - Update cart item quantity
- `DELETE /cart/remove/:id` - Remove item from cart

## Setup

1. Clone the repository 
   link - https://github.com/Nitish15032000/shoppyglobe-backend.git
2. ## Clone the repository for frontend with backend
   link - https://github.com/Nitish15032000/shoppyglobe-application.git
2. Install dependencies: `npm install`
3. Create a `.env` file 
4. Start the server: `npm start` (or `npm run dev` for development)

## Testing
Using ThunderClient to test the API endpoints.