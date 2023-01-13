/*!
 *
 * WebRTC Lab
 * @author dodortus (dodortus@gmail.com / codejs.co.kr)
 *
 */
const fs = require('fs');

const options = {
  key: fs.readFileSync('backend\\private.pem'),
  cert: fs.readFileSync('backend\\public.pem')
};

//var fileServer = new(nodeStatic.Server)();

const config = require('./config.json');
const express = require('express');
const app = express();
const ejs = require('ejs');
const https = require('https').Server(app);
const port = process.env.PORT || config.webserver.port;
const root = `${__dirname}/../`;
const path = {
  frontend: `${root}/frontend`,
};

app.set('views', path.frontend + '/views');
app.engine('ejs', ejs.renderFile);
app.use(express.static(path.frontend + '/contents'));
app.use(express.static(path.frontend + '/views/examples'));

// Routes
require('./routes')(app);

// Socket.io
require('./controllers/socket.js')(https);


var fileServer = new(nodeStatic.Server)();
https= https.createServer(options, (req,res)=>{
  fileServer.serve(req, res);
}).listen(3000);

/*
// Server listen
var fileServer = new(nodeStatic.Server)();
https.listen = function() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};
*/
/*
// Server listen
https.listen(options, port, function () {
  console.log('WebRTC Lab server running at ' + config.webserver.host + ':' + port);
});
*/
