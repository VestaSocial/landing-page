module.exports = function (eleventyConfig) {
  // Static assets — copied to the output root so absolute paths (/tree.svg,
  // /favicon.svg) resolve the same for every locale (/, /nl/, ...).
  eleventyConfig.addPassthroughCopy({ "src/tree.svg": "tree.svg" });
  eleventyConfig.addPassthroughCopy({ "src/favicon.svg": "favicon.svg" });

  // Domain + crawler files must live in the built output, because an
  // Actions-based Pages deploy serves ONLY the artifact (not the repo root).
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });

  return {
    dir: { input: "src", output: "_site", data: "_data" },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};
