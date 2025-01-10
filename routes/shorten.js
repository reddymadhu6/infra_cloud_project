const express = require('express');
const router = express.Router();
const storage = require('../services/storage');

// Shorten URL
router.post('/', (req, res) => {
    const { url } = req.body;
    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const shortURL = storage.shortenURL(url);
    res.json({ shortURL });
});

module.exports = router;
