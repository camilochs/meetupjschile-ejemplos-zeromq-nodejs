var zmq = require('zmq'),
    sock = zmq.socket('push');//elegimos un socket de tipo push

//Se crea la conexión con el ip-port
//Nota: Al ser solo un flujo de información no es necesario que sea asincrono.
sock.bindSync('tcp://127.0.0.1:3000');

console.log('Iniciado!');
//Creo un intervalo de envio de mensajes a los worker's
setInterval(function(){
  console.log('Enviando mensaje...');
  sock.send(JSON.stringify({"msg" : "Mensaje enviado desde producer!"}));
}, 2000);