const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/danielpliego/projects/indigo/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/danielpliego/projects/indigo/src/pages/404.js"))),
  "component---src-pages-html-js": hot(preferDefault(require("/Users/danielpliego/projects/indigo/src/pages/html.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/danielpliego/projects/indigo/src/pages/index.js")))
}

