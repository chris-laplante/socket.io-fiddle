
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

io.on('connect', onConnect);
io.on('error', (error) => console.error('io error: ' + error));
server.listen(port, () => console.log('server listening on port ' + port));
server.on('error', (error) => console.error('server error: ' + error));

function onConnect(socket){
  console.log('connect ' + socket.id);

  socket.on('error', (error) => console.error('socket error: ' + error));
  socket.on('disconnect', () => console.log('disconnect ' + socket.id));
}
