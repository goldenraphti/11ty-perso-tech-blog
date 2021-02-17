module.exports = function (eleventyConfig) {
  // Copy '/css' to '_site/css'
  eleventyConfig.addPassthroughCopy("css");
  // Copy `img/` to `_site/img`
  eleventyConfig.addPassthroughCopy("img");
  // Copy `icons/` to `_site/icons`
  eleventyConfig.addPassthroughCopy("icons");
  return {
    passthroughFileCopy: true,
  };
};
