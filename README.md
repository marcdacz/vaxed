# vaxed
Accessibility Verified!

Create automated accessibility tests in seconds using `vaxed`. Under the hood its using `Playwright` and `axe` to help you ensure your apps are accessible.

It features an easy to use CLI that allows you to initialise a new project, create test suites and scripts. 


## Getting started
### Installation

You can install `vaxed` globally to take advantage of the CLI

```
npm install -g vaxed
```

Or you may install it locally in your project to use it as a module

```
npm install --save vaxed
```

### CLI commands

Initialise a Project
```
vaxed init
```
Run your Tests
```
vaxed test
vaxed test --filter SomeText
```
Generate Additional Test Suites
```
vaxed gen testsuite --name SomeName
```
Generate Before/After All Test Scripts which when set, will run before/after all the test scenarios in the test suite and have access to configuration data
```
vaxed gen beforeallscript --name SomeName
vaxed gen afterallscript --name SomeName
```
Generate Before/BeforeEach/After/AfterEach Test Scripts which when set, will run before/after the test scenario. Both have access to scenario data but after scripts have access to actual API response data
```
vaxed gen beforescript --name SomeName
vaxed gen aftercript --name SomeName
```

### Test anatomy
```
{
  name: "Sample Test Suite",
  configs: {   
    baseUrl: "{{baseUrl}}",
    beforeAllScript: "beforeAllScript.js",
    afterAllScript: "afterAllScript.js"
  },
  scenarios: [
    {
      test: "Sample Scenario 1",
      beforeScript: "beforeScript.js",
      afterScript: "afterScript.js",
      clickSelector: "#submit",
      keypressSelector: { selector: "#email", keypress: "marcdacz@mail.com" },
      hoverSelector: ".tooltip",
      waitForSelector: "#loading-icon",
      delay: 2000,
      checkA11ySelector: "#container"
    },
    {
      test: "Sample Scenario 2",     
      actions: [
        { 
          selector: "#username",
          action: "keypressSelector",
          args: "spiderman"
        },
        { 
          selector: "#password",
          action: "keypressSelector",
          args: "N0-w@y-h0m3"
        },
        { 
          selector: "#submit",
          action: "clickSelector"
        },
        {
          action: "delay",
          args: 2000
        },
        { 
          selector: "h1",
          action: "waitForSelector"
        }
      ]
    }
  ]
};
```

### Global configuration (settings.json)
```
{
  "paths": {    
    "reports": "reports",
    "scripts": "scripts",
    "tests": "tests",
    "baseline": "baseline"
  },
  "configs": {
    "env": "dev",
    "baseUrl": "{{baseUrl}}",   
    "asyncLimit": 2,
    "delay": 0,
    "beforeAllScript": "beforeAllScript.js",
    "afterAllScript": "afterAllScript.js"
  },
  "environments": {
    "dev": {
      "baseUrl": "https://dev.vaxed.io",
      "version": "4.23"
    },
    "staging": {
      "baseUrl": "https://staging.vaxed.io",
      "version": "4.22"
    }
  }
}
```


## Development
```
npm install 

npm run unit-test

npm run sys-test
```

Note: To test the CLI locally, you can use _npm link_ command

### Built with the help of the following

* [yargs](https://github.com/yargs/yargs) - Used to create the CLI
* [bluebird](https://github.com/petkaantonov/bluebird) - Promise Library
* [throat](https://github.com/ForbesLindesay/throat) - Used to throttle parallelism
* [moment](https://github.com/moment/moment) - Used for Datetime stuff
* [chalk](https://github.com/chalk/chalk) - Made the logging colorful
* [shelljs](https://github.com/shelljs/shelljs) - Cross Environment Shell
* [junit-report-builder](https://github.com/davidparsson/junit-report-builder) - Generates JUnit Report
* [xunit-viewer](https://github.com/lukejpreston/xunit-viewer) - Generates HTML Report

### Author(s)

* Marc Dacanay ([Github](https://github.com/marcdacz) | [LinkedIn](https://www.linkedin.com/in/marcdacanay/))

## License

This project is licensed under the MIT License.

