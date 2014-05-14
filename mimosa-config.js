exports.config = {
  "modules": [
    "copy",
    "jshint",
    "csslint",
    "server",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "less",
    "bower"
  ],
  watch: {
    sourceDir: 'src',
    compiledDir: 'www',
    javascriptDir: 'app'
  },
  vendor: {
    javascripts: 'app/vendor',
    stylesheets: 'css/vendor'
  },
  bower: {
    copy: {
      mainOverrides: {
        "jasmine": [
          "lib/jasmine-core"
        ]
      }
    }
  }
}