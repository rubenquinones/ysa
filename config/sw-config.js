module.exports = {
  cache: {
    cacheId: "ysa",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "ysa",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
