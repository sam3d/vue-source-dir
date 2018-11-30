# vue-source-dir
Add the option to configure the source directory for Vue CLI

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
