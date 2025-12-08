export default ({ env }) => ({
  upload: {
    config: {
      sizeLimit: 512 * 1024 * 1024, // 512MB
      breakpoints: {
        xlarge: 1920,
        large: 1000,
        medium: 750,
        small: 500,
        xsmall: 64
      },
      // Reduce optimization issues on Windows
      responsiveDimensions: false,
    },
  },
});
