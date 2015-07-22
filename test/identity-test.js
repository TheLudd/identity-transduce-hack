var R = require('ramda');
var Identity = require('../lib/identity');
var chai = require('chai');
chai.should();

describe('Identity', function() {

  it('can be compared', function() {
    Identity(1).equals(Identity(1)).should.be.ok;
    Identity(2).equals(Identity(1)).should.not.be.ok;
  });

  it('can be mapped over', function() {
    var result = R.map(R.add(1), Identity(1));
    result.extract().should.equal(2);
  });

});
