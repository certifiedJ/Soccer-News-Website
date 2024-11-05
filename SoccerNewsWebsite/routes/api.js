const express = require('express');
const createError = require('http-errors'); // Import createError from http-errors
const router = express.Router();

// Dynamic Data Retrieval Route
router.get('/data/:category', function(req, res, next) {
  const category = req.params.category.toLowerCase();
  let data;
  switch (category) {
    case 'soccer':
      data = { name: 'Soccer', description: 'Soccer is a team sport and world sport involving two teams of 11 players' };
      break;
    case 'basketball':
      data = { name: 'Basketball', description: 'Basketball is a team sport and world sport involving two teams of five players' };
      break;
    default:
      data = { name: 'Unknown', description: `No description available for category: ${category}` };
  }
  res.json(data);
});

// Dynamic Registration Route
router.get('/register/:name/:lastname', function(req, res, next) {
  try {
    const { name, lastname } = req.params;
    console.log(`Received registration request for: ${name} ${lastname}`);
    res.send(`${name} ${lastname} is registered successfully!`);
  } catch (error) {
    console.error('Error during registration:', error); // Log the error
    next(createError(500, 'Internal Server Error')); // Use createError to handle errors
  }
});

module.exports = router;