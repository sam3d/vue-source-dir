const _ = require("lodash");
const path = require("path");

module.exports = function handler(api, options) {
  let sourceDir = _.get(options, "pluginOptions.sourceDir"); // Get the plugin configuration
  let entryFile = _.get(options, "pluginOptions.entryFile", `main.js`); // Get the entry file if it is set, default to main.js otherwise
  let entryFilePath = `./${sourceDir}/${entryFile}`; // Combine the source directory and entry file
  if (!sourceDir) return; // If there's no source dir option, don't do anything
  sourceDir = path.relative(api.service.pkgContext, sourceDir); // Parse the source dir relative to the vue project root
  setup(api, sourceDir, entryFilePath); // Start the plugin setup process
};

function setup(api, sourceDir, entryFilePath) {
  api.chainWebpack(config => setupWebpack(config, sourceDir, entryFilePath)); // Configure all webpack options
}

function setupWebpack(config, sourceDir, entryFilePath) {
  /**
   * Configure the new entry point.
   */
  const entry = config.entry("app");
  entry.clear(); // Remove existing entry rule
  entry.add(entryFilePath);

  /**
   * Configure how the @ symbol is resolved.
   */
  const alias = config.resolve.alias;
  alias.set("@", path.resolve(sourceDir));
}
