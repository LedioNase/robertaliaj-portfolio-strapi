export default ({ env }) => ({
  "cloud-cronjob-runner": {
    enabled: false,
  },
  upload: {
    config: {
      provider: "strapi-provider-upload-strapi-cloud",
      sizeLimit: 512 * 1024 * 1024,
      security: {
        allowedTypes: [
          "image/*",
          "video/*",
          "audio/*",
          "application/pdf",
          "text/*",
        ],
      },
    },
  },
});