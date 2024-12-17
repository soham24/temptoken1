const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// POST endpoint
app.post('/secure-endpoint', (req, res) => {
    const token = req.headers['authorization']; // Extract token from 'Authorization' header
    
    if (token !== '1234') {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    res.status(200).json({ message: 'Access granted' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
