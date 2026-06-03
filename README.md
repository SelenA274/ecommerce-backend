# VELO Beauty Ecommerce Backend

## Overview

VELO Beauty Ecommerce Backend is a RESTful API built with Node.js, Express, TypeScript, and MongoDB. It powers the VELO Beauty platform by handling authentication, product management, shopping carts, orders, image uploads, and real-time inventory updates.

This backend serves both the customer storefront and the CRM dashboard.

---

## Features

### Authentication & Security

- User Registration
- User Login
- JWT Authentication
- Email Verification
- Password Reset
- Admin Two-Factor Authentication (2FA)
- Role-Based Access Control

### Product Management

- Create Products
- Update Products
- Delete Products
- Product Variants
- Product Ratings & Reviews
- Image Uploads

### Shopping Cart

- Add Items to Cart
- Update Quantities
- Remove Items
- Cart Synchronization

### Orders

- Create Orders
- Order Tracking
- Order Status Updates
- Order Cancellation

### User Management

- User Profiles
- Address Management
- User Roles

### Real-Time Features

- Live Stock Updates
- Product Availability Notifications

---

## Technologies Used

### Backend

- Node.js
- Express.js
- TypeScript

### Database

- MongoDB
- Mongoose

### Authentication

- JWT
- bcrypt

### Cloud Services

- Cloudinary
- Nodemailer

### Validation & Security

- Joi
- Helmet
- HPP
- Express Rate Limit
- CORS

### Realtime

- Socket.IO

---

## Project Structure

```text
src/
├── config/
├── features/
│   ├── auth/
│   ├── users/
│   ├── products/
│   ├── cart/
│   └── orders/
├── shared/
│   ├── middleware/
│   └── utils/
├── scripts/
└── types/
```

---

## API Modules

### Authentication
- Register
- Login
- Email Verification
- Password Reset
- Admin Login
- 2FA Verification

### Products
- Product CRUD Operations
- Product Reviews
- Product Ratings

### Cart
- Cart Management
- Cart Synchronization

### Orders
- Order Creation
- Order Tracking
- Status Updates

### Users
- Profile Management
- Address Management
- Role Management

---

## Environment Variables

```env
MONGO_URI=
JWT_SECRET=

EMAIL_USER=
EMAIL_PASS=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

RESET_PASSWORD_URL=
EMAIL_FROM=
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/SelenA274/ecommerce-backend.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build Project

```bash
npm run build
```

---

## System Architecture

```text
Storefront
     ↓
Backend API
     ↓
MongoDB Atlas

CRM Dashboard
     ↓
Backend API
     ↓
MongoDB Atlas
```

---

## Future Enhancements

- Payment Gateway Integration
- Swagger API Documentation
- Docker Support
- Automated Testing
- Analytics Services
- Advanced Inventory Management

---

## Related Repositories

- Storefront: https://github.com/SelenA274/storefront
- CRM Dashboard: https://github.com/SelenA274/crm

---

## Author

Selen Amasha
Software Engineer Student
