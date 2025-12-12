export default ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: false,
  },
  upload: {
    config: {
      sizeLimit: 512 * 1024 * 1024,
      security: {
        allowedMimeTypes: [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/webp',
          'image/svg+xml',
          'video/mp4',
          'audio/mpeg',
          'application/pdf',
          'text/plain',
        ],
        allowedExtensions: ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg', '.mp4', '.mp3', '.pdf', '.txt'],
      },
    },
  },
});
