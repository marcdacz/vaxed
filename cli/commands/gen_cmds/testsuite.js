const { join, basename } = require('path');
const shell = require('shelljs');
const fileHelpers = require(join(__dirname, '../../../core/fileHelpers'));
const log = require(join(__dirname, '../../../core/logger'));

exports.command = 'testsuite [name]'
exports.aliases = ['test', 't']
exports.desc = 'Generate vaxed test suite'
exports.builder = {
  name: {
    default: 'vaxedTest'
  }
}
exports.handler = function(argv) {
  const settings = fileHelpers.requireUncached(join(process.cwd(), 'settings.json'));
  if (settings) {
    const testSuitesPath = settings.paths.tests || 'tests';
    const src = join(__dirname, `../../scaffolding/tests/testSuite.js`)
    const dest = join(process.cwd(), `${testSuitesPath}/${basename(argv.name, '.js')}.js`);
    shell.cp(src, dest)
  } else {
    log.info(`Ensure the project is initialised by running 'vaxed init'`)
  }
}