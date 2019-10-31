const _ = require("lodash");
const path = require("path");

module.exports = function handler(api, options) {
  let sourceDir = _.get(options, "pluginOptions.sourceDir");
  let entryFile = _.get(options, "pluginOptions.entryFile", `main.js`);

  // If there's no source dir option, don't do anything. This is required for
  // operation of this plugin.
  if (!sourceDir) return;

  /**
   * Resolve a file path relative to the root of the vue project.
   * @param {string} file The file path to resolve.
   */
  const fromRoot = file => path.relative(api.service.pkgContext, file);

  // Resolve the relative file paths.
  sourceDir = fromRoot(sourceDir);
  entryFile = fromRoot(path.resolve(sourceDir, entryFile));

  // Start the plugin setup process.
  setup(api, sourceDir, entryFile);
};

function setup(api, sourceDir, entryFile) {
  // Configure all webpack options.
  api.chainWebpack(config => setupWebpack(config, sourceDir, entryFile));
}

function setupWebpack(config, sourceDir, entryFile) {
  /**
   * Configure the new entry point.
   */
  const entry = config.entry("app");
  entry.clear(); // Remove existing entry rule
  entry.add(entryFile);

  /**
   * Configure how the @ symbol is resolved.
   */
  const alias = config.resolve.alias;
  alias.set("@", path.resolve(sourceDir));
}
