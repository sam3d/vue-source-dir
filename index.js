const _ = require("lodash");
const path = require("path");

module.exports = function handler(api, options) {
	let sourceDir = _.get(options, "pluginOptions.sourceDir"); // Get the plugin configuration
	if (!sourceDir) return; // If there's no source dir option, don't do anything
	sourceDir = path.relative(api.service.pkgContext, sourceDir); // Parse the source dir relative to the vue project root
	setup(api, sourceDir); // Start the plugin setup process
};

function setup(api, sourceDir) {
	api.chainWebpack(config => setupWebpack(config, sourceDir)); // Configure all webpack options
}

function setupWebpack(config, sourceDir) {
	/**
	 * Configure the new entry point.
	 */
	const entry = config.entry("app");
	entry.clear(); // Remove existing entry rule
	entry.add(`./${sourceDir}/main.js`);

	/**
	 * Configure how the @ symbol is resolved.
	 */
	const alias = config.resolve.alias;
	alias.set("@", path.resolve(sourceDir));
}
