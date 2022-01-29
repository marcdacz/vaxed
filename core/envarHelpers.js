const getEnvar = (varName, settings) => {
    let settingsConfigs = settings.configs || {};
    const regex = new RegExp("(?<={{)(.*)(?=}})");
    let envarValue = varName;
    if (regex.test(envarValue)) {
        let envarMatch = envarValue.match(regex);
        if (envarMatch && envarMatch.length > 0) {
            let currentEnvironment = settingsConfigs.env || process.env.NODE_ENV;
            envarValue = settings.environments[currentEnvironment][envarMatch[0].trim()];
        }
    }
    return envarValue;
};
module.exports = {
	getEnvar
};
