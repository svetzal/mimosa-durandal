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
        "bootstrap": [
          "docs/assets/js/bootstrap.js",
          "docs/assets/css/bootstrap.css",
          "docs/assets/css/bootstrap-responsive.css"
        ],
        "durandal": [
          {
            img: "../../images",
            js: "durandal",
            css: "durandal"
          }
        ],
         "jasmine": [
          "lib/jasmine-core"
        ]
      }
    }
  }
}
