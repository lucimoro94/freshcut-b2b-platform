const express = require('express');
const app = express();

app.use(express.json());

// Route di base per verificare che il server funzioni
app.get('/', (req, res) => {
    res.status(200).json({ message: 'FreshCut B2B Platform API is running' });
});

module.exports = app;