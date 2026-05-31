module.exports = function (eleventyConfig) {
  // Static assets — copied to the output root so absolute paths (/tree.svg,
  // /favicon.svg) resolve the same for every locale (/, /nl/, ...).
  eleventyConfig.addPassthroughCopy({ "src/tree.svg": "tree.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
