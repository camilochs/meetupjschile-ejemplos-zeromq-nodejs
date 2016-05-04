var zeromq = require('zmq'),
    ipPort = 'tcp://127.0.0.1:12345',//Ip-port del socket a crear
    socket = zeromq.socket('rep'); //Se elige un socket de tipo REP

//Crea el socket para escuchar desde el ip-port
socket.bind(ipPort, function(err) {
    //Comprueba si existe algun problema al crear el socket en 
    //dicha ip-port
    if (err) throw err;
    var receiveClientJson = "";
    console.log('Iniciado!');
    
    //Recibe un mensaje desde un socket conectado 
    socket.on('message', function(data) {
        
        //Convierte el buffer de llegada a JSON
        receiveClientJson = JSON.parse(data)
        console.log("Mensaje desde cliente: ", receiveClientJson["msg"],
                    "\nEnviado a las:", receiveClientJson["date"], '\n');
        socket.send(JSON.stringify({"reply": 
                "Mensaje desde server --> [OK - mensaje recibido]"}));
    });
});