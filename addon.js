var addon = require('bindings')('addon.node')

module.exports = {
  smash: addon.smash,
  jsAdder: function(lhs, rhs) {
    return lhs + rhs
  }
}
