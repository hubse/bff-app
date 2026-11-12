# BFF Example

A demonstration of the Backend For Frontend (BFF) pattern with Node.js and Express.

## Overview

This project implements the BFF pattern with three services:
- **Core Product Service**: Provides product data and business logic
- **Web BFF**: Adapts data for web clients
- **Mobile BFF**: Adapts data for mobile clients

## Project Structure

```
bff-example/
├── app/
│   ├── product-service.js   # Core service (port 3001)
│   ├── web-bff.js           # Web BFF (port 4001)
│   └── mobile-bff.js        # Mobile BFF (port 4002)
├── package.json
└── README.md
```

## Installation

```
bash
npm install
```

## Running the Services

### Start all services:
```
bash
npm run start:all
```

### Start individual services:
```
bash
# Core Product Service (port 3001)
npm run start:core

# Web BFF (port 4001)
npm run start:web

# Mobile BFF (port 4002)
npm run start:mobile
```

## API Endpoints

### Core Product Service (http://localhost:3001)
- `GET /product/:id` - Get product details with discounted price

### Web BFF (http://localhost:4001)
- `GET /web/product/:id` - Get product data adapted for web clients

### Mobile BFF (http://localhost:4002)
- `GET /mobile/product/:id` - Get product data adapted for mobile clients

## Data Adaptation

| Feature | Web BFF | Mobile BFF |
|---------|---------|------------|
| Reviews | All reviews | Top 2 reviews |
| Images | High-resolution | Low-resolution |
| Description | Full text | Truncated (50 chars) |
