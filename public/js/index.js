
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    // socket.emit('createEmail', {
    //     to: 'example@domain.com',
    //     text: 'Dummy text placed here.'
    // });

    socket.emit('createMessage', {
        from: 'Human 02',
        text: 'Dummy text placed here.'
    });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

// socket.on('newEmail', function (email) {
//     console.log('New email.', email);
// });

socket.on('newMessage', function (message) {
    console.log('Got new message.', message);
});
