const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Mock "current" token
let validToken = "1234"; // Initially set to 1234

// Secure endpoint - requires token
app.post('/secure-endpoint', (req, res) => {
    const token = req.headers['authorization']; // Extract token from headers

    if (token !== validToken) {
        return res.status(401).json({ message: 'Unauthorized: Invalid token' });
    }

    res.status(200).json({ message: 'Access granted' });
});

// Token refresh endpoint
app.post('/refresh-token', (req, res) => {
    // Simulate token regeneration logic
   // validToken = generateNewToken();
    res.status(200).json({ message: 'New token generated', token: validToken });
});

// Function to generate a new token (dummy logic)
function generateNewToken() {
    return Math.random().toString(36).substring(2, 10); // Random 8-character token
}

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
