// mobile-bff.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4002;

const CORE_SERVICE_URL = "http://localhost:3001";

app.get('/mobile/product/:id', async (req, res) => {
  try {
    const { data: product } = await axios.get(`${CORE_SERVICE_URL}/product/${req.params.id}`);
    
    // Adapt data for Mobile client
    const mobileResponse = {
      id: product.id,
      name: product.name,
      discountedPrice: product.discountedPrice,
      description: product.description.substring(0, 50) + "...",  // short desc
      reviews: product.reviews.slice(0, 2),                       // top 2 reviews
      images: product.images.lowRes                               // low-res image
    };

    res.json(mobileResponse);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

app.listen(PORT, () => console.log(`Mobile BFF running on port ${PORT}`));
