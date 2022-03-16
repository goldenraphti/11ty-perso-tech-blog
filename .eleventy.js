const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { DateTime } = require("luxon");

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

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  return {
    passthroughFileCopy: true,
  };
};
