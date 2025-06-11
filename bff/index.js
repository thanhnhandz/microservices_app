const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

const USER_SERVICE = 'http://localhost:3001';
const PRODUCT_SERVICE = 'http://localhost:3002';

app.post('/api/register', async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE}/register`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Internal error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const response = await axios.post(`${USER_SERVICE}/login`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Internal error' });
  }
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await axios.get(`${PRODUCT_SERVICE}/products`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get products' });
  }
});

app.get('/api/users', async (req, res) => {
  console.log("✅ Đã gọi BFF route /api/users");
  try {
    const response = await axios.get(`${USER_SERVICE}/users`);
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get users' });
  }
});

app.post('/api/products', async (req, res) => {
  try {
    const response = await axios.post(`${PRODUCT_SERVICE}/products`, req.body);
    res.json(response.data);
  } catch (err) {
    res.status(err.response?.status || 500).json(err.response?.data || { error: 'Failed to add product' });
  }
});

app.listen(port, () => {
  console.log(`BFF running on port ${port}`);
});
