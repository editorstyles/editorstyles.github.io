module.exports = {
  port: 4000,

  tasks: {
    imagemin:   true,
    sass:       true,
    server:     true,
    webpack:    true,
  },

  paths: {
    dest:      "_site",
    posts:     "_posts",
    assets:    "./",
    css:       "css",
    sass:      "editorstyles",
    jsSrc:     "assets/_js",
    js:        "assets/js",
    imagesSrc: "assets/_images",
    images:    "assets/images",
  },

  jekyll: {
    config: {
      default:     "_config.yml",
      development: "_config_development.yml",
      production:  "",
    }
  },

  sass: {
    outputStyle: "expanded",
  },

  autoprefixer: {
    browsers: [
      "> 1%",
      "last 2 versions",
      "Firefox ESR",
    ]
  },

  js: {
    entry: [
      "main.js",
    ],
  },
}
