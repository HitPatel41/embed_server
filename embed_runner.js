const express = require('express');
const path = require('path');
const cors = require('cors'); // Import cors
const app = express();
const port = 3002;

// Enable CORS for all requests
app.use(cors());

// Serve the build directory statically
app.use(express.static(path.join(__dirname, 'build')));

app.get('/embed.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'embed.js'));
});

app.listen(port, () => {
    console.log(`Embed server listening at http://localhost:${port}`);
});
