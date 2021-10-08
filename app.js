<script src='//cdnjs.cloudflare.com/ajax/libs/socket.io/1.7.4/socket.io.min.js'></script>

<script>
var socket = io.connect('//127.0.0.1:1337');

socket.on('connect', function () {
    console.log('connected');

    socket.on('broadcast', function (data) {
        //console.log(data);
        //socket.emit("broadcast", data);
        alert(data.text);
    });

    socket.on('disconnect', function () {
        console.log('disconnected');
    });
});
</script>