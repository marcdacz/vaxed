exports.command = 'generate <command>'
exports.aliases = ['gen', 'g']
exports.description = 'Generate vaxed files'
exports.builder = function (yargs) {
  return yargs.commandDir('gen_cmds')
}
exports.handler = function (argv) {
}