
var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the corrrect message object', () => {
        var from = 'Human';
        var text = 'I am mortal.';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate corrrect location object', () => {
        var from = 'Human';
        var latitude = 16;
        var longitude = 32;
        var url = `https://www.google.com/maps?q=16,32`;
        var message = generateLocationMessage(from, latitude, longitude);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, url});
    });
});
