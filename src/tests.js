const expect = require('expect.js');
const sinon = require('sinon');
const sandbox = sinon.createSandbox();

const MyModule = {
  save() {
    return Promise
      .resolve()
      .then(() => {
        setTimeout(() => {
          throw new Error('WHOOPS');
        });
      });
  },
};

describe('ROOT - 10 tests total!!!', function() {
  afterEach(function() {
    sandbox.restore();
  });

  describe('A', function() {
    describe('A.1', function() {
      beforeEach(function() {
        sandbox.spy(MyModule, 'save');
      });

      it('A.1.t1', function() {
        MyModule.save();
        expect(1).to.eql(1);
      });
    });

    describe('A.2', function() {
      beforeEach(function() {
        sandbox.stub(MyModule, 'save').returns(Promise.resolve());
      });

      it('A.2.t1', function() {
        return MyModule.save()
          .then(() => {
            expect(1).to.eql(1);
          });
      });
    });

    describe('A.3', function() {
      it('A.3.t1', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t2', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t3', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t4', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t5', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t6', function() {
        expect(1).to.eql(0);
      });
      it('A.3.t7', function() {
        expect(1).to.eql(0);
      });
    });
  });
});
