const express = require('express');
const mustacheExpress = require('mustache-express');
const logger = require('morgan');
const debug = require('debug')('pslateexport:server');
const axios = require("axios");
const http = require('http');
const app = express();
const server = http.createServer(app);
require('dotenv').config();

const port = 3000;
app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.engine('mustache', mustacheExpress('./views/partials', '.mustache'));
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_ACCESS_TOKEN, SHOP } = process.env

global.instance = axios.create({
    baseURL: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET}@${SHOP}/admin/api/2022-01`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
    }
})

// ROUTES
app.use("/", require('./routes/index.js'));

// error handler
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        default:
            throw error;
    }
}

// console server logging
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
