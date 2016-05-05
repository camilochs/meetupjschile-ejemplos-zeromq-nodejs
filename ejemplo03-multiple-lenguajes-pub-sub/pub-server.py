import zmq
import random
import sys
import time

port = "5555"

context = zmq.Context()
socket = context.socket(zmq.PUB)
socket.bind("tcp://127.0.0.1:%s" % port)

while True:
    socket.send_multipart(["JSChile", "Hola JS Chile!!!!!"])
    time.sleep(1)

