var assert = require('assert')

var lib = require('./addon.js')

describe('lib.jsAdder()', function() {
  it('should return 2 when passed 1,1', function() {
    assert.equal(lib.jsAdder(1,1), 2)
  })
})
