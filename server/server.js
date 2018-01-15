// ---------------------------------------------------
// Import NPM Libs
// ---------------------------------------------------

const helmet = require('helmet');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

// ---------------------------------------------------
// Import Helpers
// ---------------------------------------------------

const appRoutes = require('./routes/app');
const apiRoutes = require('./routes/api');

// ---------------------------------------------------
// Constants
// ---------------------------------------------------

const app = express();
const httpServer = http.Server(app);
const port = 3000;

app.enable('trust proxy');

app.use(helmet());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', appRoutes);
app.use('/api', apiRoutes);

// ---------------------------------------------------
// Define template engine
// ---------------------------------------------------

app.use(express.static(__dirname + '/../dist'));
app.set('views', __dirname + '/../dist');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// ---------------------------------------------------
// Start Server
// ---------------------------------------------------

let server = httpServer.listen(process.env.PORT || port, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log('Started server at http://%s:%s', host, port);
});
