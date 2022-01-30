describe('Core: Playwright Script Tests', () => {
	const sinon = require('sinon');
	const moment = require('moment');
	const chai = require('chai');
	const expect = chai.expect;
	const browserScript = require('../core/browserScript');
	let scenario, configs;

	beforeEach(() => {
		scenario = {
			clickSelector: 'text="About"',
			checkA11ySelector: '#banner'
		};

		configs = {
			baseUrl: 'https://www.washington.edu/accesscomputing/AU/before.html'
		};
	});

	it('should fail when scenario.expected is not set', async () => {
		await browserScript(scenario, configs);
	});
});
