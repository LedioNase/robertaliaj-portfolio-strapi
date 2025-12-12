export default ({ env }) => ({
  'cloud-cronjob-runner': {
    enabled: false,
  },
  upload: {
    config: {
      sizeLimit: 512 * 1024 * 1024,
      security: {
        allowedTypes: ['image/*', 'video/*', 'audio/*', 'application/pdf', 'text/*'],
      },
    },
  },
});
