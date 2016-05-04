var zeromq = require('zmq'),
    ipPort = 'tcp://127.0.0.1:12345', //Ip-port del socket a conectarse
    socket = zeromq.socket('req'); //Se elige un socket de tipo REQ

//Se conecta a otro socket
socket.connect(ipPort);

//Recibe un argumento desde la linea de comando
var args = process.argv.slice(2);
if(args.length == 0){
    throw 'Debe ingresar un argumento'
}

//Crea un intervalo de envio de mensaje al servidor, cada 2 segundos.
setInterval(function() {
    //stringify, convierte un objeto JS a JSON.
    socket.send(JSON.stringify({"msg": args[0], 
                                "date": new Date()
                                }));
}, 2000);

var receiveServerJson = "";
socket.on('message', function(data) {
    //Convierte el buffer de llegada a JSON.
    receiveServerJson = JSON.parse(data)
    console.log(receiveServerJson["reply"]);
});