const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Copy '/css' to '_site/css'
  eleventyConfig.addPassthroughCopy("css");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  // Copy `icons/` to `_site/icons`
  eleventyConfig.addPassthroughCopy("icons");
  // Copy '/js' to '_site/js'
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPlugin(syntaxHighlight);
  return {
    passthroughFileCopy: true,
  };
};
