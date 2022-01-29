const { join } = require('path');

exports.command = 'test [filter]'
exports.aliases = ['t']
exports.nargs = 1
exports.desc = 'Execute vaxed tests'
exports.builder = {}
exports.handler = (argv) => {
  let opts = {};
  if (argv.filter && argv.filter.length > 0) {
    opts.filter = argv.filter;
  }
  require(join(__dirname, '../../core/testRunner')).runTests(opts);
}