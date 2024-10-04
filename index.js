
// Array where the total sum is 31
const batteryBatches = [5, 6, 4, 8, 3, 5];

// Using reduce to sum the battery counts
const totalBatteries = batteryBatches.reduce((total, batch) => total + batch, 0);

// Testing framework (using Mocha and Chai)
const { expect } = require('chai');
const sinon = require('sinon');

describe('reducer', function() {
  describe('batteries', function() {
    it('should have a `totalBatteries` variable', function() {
      expect(totalBatteries).to.exist;
    });

    it('should have a number as a result', function() {
      expect(totalBatteries).to.be.a('number');
    });

    it('should have made the sum of all the assembled batteries', function() {
      expect(totalBatteries).to.eql(31);  // Expecting 31 as the total
    });
  });
});
