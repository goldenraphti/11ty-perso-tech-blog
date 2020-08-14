module.exports = function(eleventyConfig) {
    // Cpoy 'assets/css' to '_site/assets/css'
    eleventyConfig.addPassthroughCopy({'assets/css' : 'css'})
    return {
      passthroughFileCopy: true
    }
  }