const playwright = require('playwright');
const { requireUncached } = require('./fileHelpers');
const log = require('./logger');

module.exports = async (scenario, configs) => {
	try {
        const browser = await playwright['firefox'].launch({ headless: false });
        const context = await browser.newContext();
        const page = await context.newPage();     

        await page.goto('https://www.atlassian.com/');
        await page.click('text="Buy now"');

        await browser.close();
	} catch (error) {
		log.failAndExit(error);
	}

};
