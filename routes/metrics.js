const express = require('express');
const router = express.Router();
const storage = require('../services/storage');

// Get top 3 domains
router.get('/', (req, res) => {
    const topDomains = storage.getTopDomains();
    res.json(topDomains);
});

module.exports = router;
