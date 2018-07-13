
const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '32',
            name: 'Arpit',
            room: 'Sample'
        }, {
            id: '16',
            name: 'Shubham',
            room: 'Void'
        }, {
            id: '5',
            name: 'Rashmi',
            room: 'Sample'
        }];
    });

    it('should add new user', () => {
        var users = new Users();
        var user = {
            id: '8802159424',
            name: 'Arpit',
            room: 'Private96'
        };
        var resUser = users.addUser(user.id, user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('should remove a user', () => {
        var userId = '5';
        var user = users.removeUser(userId);

        expect(user.id).toBe(userId);
        expect(users.users.length).toBe(2);
    });

    it('should not remove a user', () => {
        var userId = '2';
        var user = users.removeUser(userId);

        expect(user).toBeFalsy();
        expect(users.users.length).toBe(3);
    });

    it('should find user', () => {
        var userId = '32';
        var user = users.getUser(userId);

        expect(user.id).toBe(userId);
    });


    it('should not find user', () => {
        var userId = '0';
        var user = users.getUser(userId);

        expect(user).toBeFalsy();
    });

    it('should return names for Sample room', () => {
        var userList = users.getUserList('Sample');

        expect(userList).toEqual(['Arpit', 'Rashmi']);
    });

    it('should return names for Void room', () => {
        var userList = users.getUserList('Void');

        expect(userList).toEqual(['Shubham']);
    });

});
