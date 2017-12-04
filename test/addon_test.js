var assert = require('assert')

var lib = require('./../addon.js')

describe('lib.smash()', function() {
  it('should return 15 when passed 5,3', function() {
    assert.equal(lib.smash(5,3), 15)
  })
})

describe('lib.jsAdder()', function() {
  it('should return 2 when passed 1,1', function() {
    assert.equal(lib.jsAdder(1,1), 2)
  })
})
