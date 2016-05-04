var zmq = require('zmq'), 
    //asigno un socket de tipo pull para recibir los mensajes desde los workers.
    sock = zmq.socket('pull'); 

//Se crea la conexión con la ip-port
sock.bindSync('tcp://127.0.0.1:4000');

console.log('Iniciado!');

var receivedWorkerJson = "";
sock.on('message', function(data){
    receivedWorkerJson = JSON.parse(data)
    console.log(receivedWorkerJson["msg"], receivedWorkerJson["workerPid"]);
});