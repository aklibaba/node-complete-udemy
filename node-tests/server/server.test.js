/**
 * Created by Aleksander on 2017-07-14.
 */
const request = require('supertest');
const app = require('./server').app;
const expect = require('expect');

describe('Server', () => {

  describe('#GET /', () => {
    it('should return Hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: "Page not found"
          })
        })
        .end(done);
    });

  });

  describe('#GET /users', () => {
    it('should return a users array where you exist', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: "Alex",
            age: 30
          })
        })
        .end(done);
    });
  })
});


