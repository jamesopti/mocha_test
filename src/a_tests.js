const expect = require('expect.js');

/**
 * Any of the it blocks here will cause an exit status of 0
 * WITHOUT running any of the rest of the tests.
 */
describe('throw error after test complete', function() {
  it('callback', function(done) {
    setTimeout(() => {
      expect(1).to.eql(1);
      done();
      throw new Error('oops');
    });
  });

  it('sync', function() {
    setTimeout(() => {
        throw new Error('oops');
    });
    expect(1).to.eql(1);
  });

  it('promise', function() {
    setTimeout(() => {
        throw new Error('oops');
    });
    expect(1).to.eql(1);
    return Promise.resolve();
  });

  it('error inside promise thennable', function() {
    return Promise
      .resolve()
      .then(() => {
        setTimeout(() => { throw new Error('WHOOPS'); });
      })
      .then(() => {
        expect(1).to.eql(1);
      });
  });
});

describe('Suite A - 3 tests that should fail', function() {
  describe('A', function() {
    it('A.t1', function() {
      expect(1).to.eql(0);
    });
    it('A.t2', function() {
      expect(1).to.eql(0);
    });
    it('A.t3', function() {
      expect(1).to.eql(0);
    });
  });
});
