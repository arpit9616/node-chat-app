
var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the corrrect message object', () => {
        var from = 'Human';
        var text = 'I am mortal.';
        var message = generateMessage(from, text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from, text});
    });
});
