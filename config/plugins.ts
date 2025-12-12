export default () => ({
  'cloud-cronjob-runner': {
    enabled: false,
  },
  upload: {
    config: {
      sizeLimit: 512 * 1024 * 1024,
      security: {
        allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.mp3', '.pdf', '.txt', '.doc', '.docx'],
      },
    },
  },
});
