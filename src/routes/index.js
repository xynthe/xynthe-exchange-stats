const express = require('express');

const getTotalSupply = require('./total-supply');

const router = express.Router();

router.get('/alive', (req, res) => {
  res.send('API is live');
});

router.get('/api/total-supply', getTotalSupply);

module.exports = router;
