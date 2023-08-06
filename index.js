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
app.use('/assets/vendors/unity/Release/:filename', function(req, res){
    var extensionFile = path.extname(req.params.filename);
    if(extensionFile === '.data' || extensionFile === '.mem'){
        res.header('Content-Type', 'application/octet-stream');
    }
    //Response used gzip encoding
    res.header('Content-Encoding', 'gzip');
    //Send file if there is a match into "Compressed" Unity folder
    res.sendFile(path.resolve(__dirname , '../public/vendors/unity/Compressed/'+req.params.filename+'gz'));
});

app.listen(80, () => {
  console.log('Server has started!')
});