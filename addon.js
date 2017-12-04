var addon = require('bindings')('addon.node')

console.log('This should be eight:', addon.add(3, 5))

module.exports = {
  cppAdder: addon.add,
  jsAdder: function(lhs, rhs) {
    return lhs + rhs
  }
}
