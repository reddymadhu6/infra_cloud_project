const express = require('express');
const shortenRoutes = require('./routes/shorten');
const redirectRoutes = require('./routes/redirect');
const metricsRoutes = require('./routes/metrics');

const app = express();

app.use(express.json()); // Middleware for parsing JSON

// Routes
app.use('/shorten', shortenRoutes);
app.use('/metrics', metricsRoutes);
app.use('/', redirectRoutes);


// Start the server
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
