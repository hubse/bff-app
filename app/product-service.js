// product-service.js
const express = require('express');
const app = express();
const PORT = 3001;

// Mock product data
const products = [
  {
    id: 1,
    name: "Smartphone X",
    description: "Latest smartphone with great features",
    price: 1000,
    discountPercent: 10,
    reviews: [
      { user: "Alice", rating: 5, comment: "Great!" },
      { user: "Bob", rating: 4, comment: "Good" },
      { user: "Charlie", rating: 3, comment: "Okay" }
    ],
    images: {
      highRes: "highres-img1.jpg",
      lowRes: "lowres-img1.jpg"
    }
  }
];

// Core business logic: calculate discounted price
function getProductById(id) {
  const product = products.find(p => p.id === id);
  if (!product) return null;
  return {
    ...product,
    discountedPrice: product.price - (product.price * product.discountPercent / 100)
  };
}

app.get('/product/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const product = getProductById(id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

app.listen(PORT, () => console.log(`Core Product Service running on port ${PORT}`));
