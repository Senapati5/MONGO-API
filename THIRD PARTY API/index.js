require('dotenv').config();
const http = require('http');
const express = require('express');

const PORT = process.env.PORT || 4000;
const app = express();

/* const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write("Hello from node server!")
    res.end();
}) */


app.get('/', (req, res) => {
    res.send("Hello from node-express server!")
})


const server = http.createServer(app);
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))