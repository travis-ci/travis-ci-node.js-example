var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');
    seriousCalculationss = require('../');

vows.describe('serious-calculations').addBatch({
  'When performing serious calculations': {
    topic: seriousCalculations.performSeriousCalculations(4,3),
    'result should be valid': function (result) {
      assert.isNumber(result);
      assert.equal(result, 7);
    }
  }
}).export(module);

