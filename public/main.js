var socket = io.connect('http://localhost:3000', { 'forceNew': true });
socket.on('datos', function(data) {
    document.write(data);
});