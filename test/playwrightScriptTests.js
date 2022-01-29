describe('Core: Playwright Script Tests', () => {
	const playwright = require('playwright');

	const sinon = require('sinon');
	const moment = require('moment');
	const chai = require('chai');
	const expect = chai.expect;
	const playwrightScript = require('../core/playwrightScript');
	let scenario, configs;

	beforeEach(() => {
		scenario = {
			clickSelector: 'text="Buy now"',
			checkA11ySelector: 'header[class=*Header__HeaderLine]'
		};

		configs = {
			baseUrl: 'https://www.atlassian.com'
		};
	});

	it('should fail when scenario.expected is not set', async () => {
		await playwrightScript(scenario, configs);
	});
});
