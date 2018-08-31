const expect = require('expect.js');

const AsyncErrorFn = () => Promise
  .resolve()
  .then(() => {
    setTimeout(() => {
      throw new Error('WHOOPS');
    });
  });

describe('Suite A - 10 tests total', function() {
  describe('A', function() {
    it('A.t1', function() {
      return AsyncErrorFn()
        .then(() => {
          expect(1).to.eql(1);
        });
    });
    it('A.t1', function() {
      expect(1).to.eql(0);
    });
    it('A.t2', function() {
      expect(1).to.eql(0);
    });
    it('A.t3', function() {
      expect(1).to.eql(0);
    });
    it('A.t4', function() {
      expect(1).to.eql(0);
    });
    it('A.t5', function() {
      expect(1).to.eql(0);
    });
    it('A.t6', function() {
      expect(1).to.eql(0);
    });
    it('A.t7', function() {
      expect(1).to.eql(0);
    });
    it('A.t8', function() {
      expect(1).to.eql(0);
    });
    it('A.t9', function() {
      expect(1).to.eql(0);
    });
  });
});
