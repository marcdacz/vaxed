module.exports = {
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