
const withMDX = require("@next/mdx")();

module.exports = withMDX({
  pageExtensions: ["js", "tsx", "mdx"],
});