module.exports = function(eleventyConfig) {
    // Copy '/css' to '_site/css'
    eleventyConfig.addPassthroughCopy('css')
    return {
      passthroughFileCopy: true
    }
  }