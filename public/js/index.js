
var socket = io();

socket.on('connect', function () {
    console.log('Connected to server.');

    // socket.emit('createMessage', {
    //     from: 'Human 02',
    //     text: 'Dummy text placed here.'
    // });
});

socket.on('disconnect', function () {
    console.log('Disconnected from server.');
});

socket.on('newMessage', function (message) {
    console.log('Got new message.', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'Human 02',
//     text: 'Dummy text placed here.'
// }, function (data) {
//     console.log('Got it.', data);
// });

jQuery('#message-form').on('submit', function (event) {
    event.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function () {

    });
});
