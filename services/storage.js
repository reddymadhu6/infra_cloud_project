const crypto = require('crypto');

const urlMap = new Map(); // Original URL to Short URL
const shortMap = new Map(); // Short URL to Original URL
const domainHits = new Map(); // Domain name hit counts

function generateShortURL(url) {
    return crypto.createHash('md5').update(url).digest('hex').slice(0, 6);
}

function shortenURL(url) {
    if (urlMap.has(url)) {
        return urlMap.get(url);
    }

    const shortURL = generateShortURL(url);
    urlMap.set(url, shortURL);
    shortMap.set(shortURL, url);

    // Update domain hits
    const domain = new URL(url).hostname;
    domainHits.set(domain, (domainHits.get(domain) || 0) + 1);

    return shortURL;
}

function getOriginalURL(shortURL) {
    return shortMap.get(shortURL);
}

function getTopDomains() {
    const sortedDomains = Array.from(domainHits.entries()).sort((a, b) => b[1] - a[1]);
    return sortedDomains.slice(0, 3).map(([domain, count]) => ({ domain, count }));
}

module.exports = {
    shortenURL,
    getOriginalURL,
    getTopDomains,
};
