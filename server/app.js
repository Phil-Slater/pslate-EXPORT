const express = require('express');
const mustacheExpress = require('mustache-express');
const logger = require('morgan');
const debug = require('debug')('pslateexport:server');
const axios = require("axios");
const http = require('http');
const app = express();
const path = require("path");
const server = http.createServer(app);
require('dotenv').config();
const cors = require('cors')
app.use(cors())
const mongoose = require('mongoose')

const port = 8080;
app.set('port', port);
server.listen(process.env.PORT || port);
server.on('error', onError);
server.on('listening', onListening);

app.engine('mustache', mustacheExpress('./views/partials', '.mustache'));
app.set('views', './views');
app.set('view engine', 'mustache');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public')));

const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_ACCESS_TOKEN, SHOP, MONGO_URL } = process.env

global.instance = axios.create({
    baseURL: `https://${SHOPIFY_API_KEY}:${SHOPIFY_API_SECRET}@${SHOP}/admin/api/2022-01`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': SHOPIFY_ACCESS_TOKEN
    }
})

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true, useUnifiedTopology: true
}, (error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Connected to MongoDB.')
    }
})

// ROUTES
app.use('/', require('./routes/order.js'));
app.use('/user', require('./routes/user.js'))

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
