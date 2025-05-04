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

### Cart (Requires Authentication)
- `POST /cart` - Add product to cart
- `PUT /cart/:id` - Update cart item quantity
- `DELETE /cart/:id` - Remove item from cart

## Setup

1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file based on `.env.example`
4. Start the server: `npm start` (or `npm run dev` for development)

## Testing
Use ThunderClient or Postman to test the API endpoints.