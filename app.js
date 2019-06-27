// : loading the modules needed
const express = require('express');
const expressOasGenerator = require('express-oas-generator');
const path = require('path');
const cors = require('cors');

// : routes
const searchRoute = require('./routes/search');
const downloadRoute = require('./routes/download');
const lyricsRoute = require('./routes/lyrics');
const listenRoute = require('./routes/listen');
const relatedRoute = require('./routes/relatedSongs.js');

const app = express();

// : oas setup
expressOasGenerator.init(app, {});
app.use(cors());

// : middle ware
app.use('/api', searchRoute);
app.use('/api', downloadRoute);
app.use('/api', lyricsRoute);
app.use('/api', listenRoute);
app.use('/api', relatedRoute);

// : listening to the port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log('server is started and listening on the port 3000');
});
