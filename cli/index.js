#!/usr/bin/env node
require('yargs')
  .scriptName('vaxed')
  .commandDir('commands')
  .demandCommand()
  .help()
  .argv

