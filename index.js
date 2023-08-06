var express = require('express');
var app = express();
var path = require('path');
//Do not forget to require compression middleware
var compression = require('compression');

//Compress all requests
app.use(compression());

//Serve static files
app.use('/', express.static(path.resolve(__dirname , './GMAEWAL')));

//Serve the compressed version of Unity files

app.listen(80, () => {
  console.log('Server has started!')
});