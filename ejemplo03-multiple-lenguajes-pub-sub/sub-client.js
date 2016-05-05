var zeromq = require('zmq'),
    ipPort = 'tcp://127.0.0.1:5555', //Ip-port del socket a conectarse
    socket = zeromq.socket('sub'); //Se elige un socket de tipo REQ

//Se conecta a otro socket
socket.connect(ipPort);
var channel = "JSChile";
//Me suscribo a JSChile
socket.subscribe(channel);

socket.on('message', function(channel, data) {
    console.log(channel.toString(), data.toString());
});