var zmq      = require('zmq'),
    //asigna un socket de tipo pull para recibir el producer
    reciever = zmq.socket('pull'),
    //asigna un socket de tipo push para enviar al collector 
    sender   = zmq.socket('push');

//Extraigo el pid del worker actual
var workerPid = process.pid;
//Obj que se enviara al collector
var dataSendCollector = {};

//Recibe los mensajes desde el producer
reciever.on('message', function(data) {
    //Convierte el buffer(string) a un objeto js
    dataSendCollector = JSON.parse(data)
    //Agrega una nueva key con el worker pid.
    dataSendCollector["workerPid"] = workerPid;
    sender.send(JSON.stringify(dataSendCollector));
});

//Me conecto al producer y al collector
reciever.connect('tcp://127.0.0.1:3000');
sender.connect('tcp://127.0.0.1:4000');