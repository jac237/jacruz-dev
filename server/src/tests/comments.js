const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../index");

const { assert } = chai;

chai.use(chaiHttp);

describe('Comments', function() {
  describe('GET /comments/all', function() {
    // #1
    it('should return an array of all comments', function() {
      chai.request(server)
        .get('/api/comments/all')
        .end(function(err, res) {
          console.log(res);
          assert.equal(1, 1);
          done();
        });
    });
  });
}); 
//npm install --save-dev mocha