var expect = require('chai').expect;

var arr;

describe('Main', function() {

  beforeEach(function() {
    arr = [1, 2, 3];
  });

  it('should be an array', function() {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should remove value 3 when use pop in the array', function() {
    arr.pop();
    expect(arr).to.not.include(3);
  });

  it('should return true when pop 3 from the array', function() {
    expect(arr.pop() === 3).to.be.true;
  });


  
});