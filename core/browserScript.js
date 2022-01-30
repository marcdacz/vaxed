const playwright = require('playwright');
const axe = require('axe-playwright');
const log = require('./logger');

const clickSelector = async (page, selector) => {
	await page.click(selector);
};

const keypressSelector = async (page, selector, keypress) => {
	await page.type(selector, keypress);
};

const waitForSelector = async (page, selector) => {
	await page.isVisible(selector);
};

const checkA11y = async (page, selector) => {
	let elementSelector = null;
	if (selector) {
		elementSelector = selector;
	}
	return await axe.getViolations(page, elementSelector);
};

module.exports = async (scenario, configs) => {
	const browser = await playwright['firefox'].launch({ headless: false });
	const context = await browser.newContext();
	const page = await context.newPage();

	try {
		await page.goto(configs.baseUrl);
		await axe.injectAxe(page);

		// CLICK SELECTOR
		if (scenario.clickSelector) {
			const selector = scenario.clickSelector;
			await clickSelector(page, selector);
		}

		// KEYPRESS SELECTOR
		if (scenario.keypressSelector) {
			const selector = scenario.parameter.selector;
			const keypress = scenario.parameter.keypress;
			await keypressSelector(page, selector, keypress);
		}

		// WAIT FOR SELECTOR
		if (scenario.waitForSelector) {
			const selector = scenario.waitForSelector;
			await waitForSelector(page, selector);
		}

		// CHECK A11Y
		const violations = await checkA11y(page, scenario.checkA11ySelector);
		log.info(JSON.stringify(violations, null, 2));
	} catch (error) {
		log.failAndExit(error);
	} finally {
		await browser.close();
	}
};
