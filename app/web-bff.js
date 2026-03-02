// web-bff.js
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 4001;

const CORE_SERVICE_URL = "http://localhost:3001";

app.get('/web/product/:id', async (req, res) => {
  try {
    const { data: product } = await axios.get(`${CORE_SERVICE_URL}/product/${req.params.id}`);
    
    // Adapt data for Web client
    const webResponse = {
      id: product.id,
      name: product.name,
      description: product.description,
      discountedPrice: product.discountedPrice,
      reviews: product.reviews,          // all reviews
      images: product.images.highRes     // high-res image
    };

    res.json(webResponse);
  } catch (error) {
    res.status(500).json({ error: "Error fetching product" });
  }
});

app.listen(PORT, () => console.log(`Web BFF running on port ${PORT}`));
