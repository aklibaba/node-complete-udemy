/**
 * Created by Aleksander on 2017-07-14.
 */
let expect = require('expect');
let rewire = require('rewire');

let app = rewire('./app.js');

describe('App', () => {

  const db = app.__get__('db');
  db.saveUser = expect.createSpy();

  app.__set__('db', db);

  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy('Andrew', 25);
    expect(spy).toHaveBeenCalledWith('Andrew', 25);
  });

  it('should call saveUser with user object', () => {
    var email = 'alejandro.moloniewicz@gmail.com';
    var pass = '123QWE';

    debugger;
    app.handleSignup(email, pass);
    expect(db.saveUser).toHaveBeenCalledWith({email, pass})
  });
});