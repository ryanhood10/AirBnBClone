const express = require('express');
const path = require('path');
const cors = require('cors');
// const bodyParser = require('body-parser');
// const fetch = require('cross-fetch')

const app = express();

// Use the cors middleware 
app.use(express.json());
app.use(cors()); 


// Set the port for the server to listen on
const PORT = process.env.PORT || 3001;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
