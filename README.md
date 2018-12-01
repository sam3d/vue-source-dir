# vue-source-dir [![npm](https://badge.fury.io/js/vue-cli-plugin-source-dir.svg)](https://www.npmjs.com/package/vue-cli-plugin-source-dir)

_Add the option to configure the source directory for Vue CLI_

(actual npm package is [vue-cli-plugin-source-dir](https://www.npmjs.com/package/vue-cli-plugin-source-dir))

## Quick start
Navigate to your Vue CLI 3 project and run:

```bash
$ vue add source-dir
```

Then in your `vue.config.js` file, set the following:

```javascript
// vue.config.js
module.exports = {
    pluginOptions: {
        sourceDir: "client"
    }
}
```

Replace `client` with whichever directory you wish to use instead of `src`. Finally, simply rename the `src` directory and you should be good to go!

## A note on implementation
According to the core Vue CLI team, this is currently marked as an advanced feature and should only be attempted in circumstances where the user knows what they're doing. This therefore means that this feature is, at best, unsupported by the core Vue CLI team.

I disagree with this. A lot.

Therefore, I will make every possible attempt to ensure that this is actively maintained and functional against every version of Vue CLI, and with the exception of having to put the config in `pluginOptions`, will be as close as possible in functionality to a native first-class implementation.

## Contributing
This plugin modifies many different parts of the Vue configuration to ensure it is fully functional, but alas I am only human and thus prone to error.

Please feel free to contribute any changes, fixes, code or issues that arise from the use of this plugin. I will try and be as timely as possible!
