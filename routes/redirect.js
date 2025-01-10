const express = require('express');
const router = express.Router();
const storage = require('../services/storage');

// Redirect to original URL
router.get('/:shortURL', (req, res) => {
    const { shortURL } = req.params;
    const originalURL = storage.getOriginalURL(shortURL);

    if (!originalURL) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    res.redirect(originalURL);
});

module.exports = router;
