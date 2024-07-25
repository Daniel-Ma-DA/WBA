
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'A5.2.html'));
});

// Handle form submission

app.post('/submit', (req, res) => {
    console.log(req.body)
    // Process the order here
    const totalBottles = parseInt(req.body.totalBottles);
    const totalSum = req.body.totalSum
    const responseHtml = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Order Summary</title>
        </head>
        <body>
            <h2>Order Summary</h2>
            <p>Total Bottles: ${totalBottles}</p>
            <p>Sum: ${totalSum}</p>
            
        </body>
        </html>
    `;
    res.send(responseHtml);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});