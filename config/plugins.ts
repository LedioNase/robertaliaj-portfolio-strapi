export default () => ({
  'cloud-cronjob-runner': {
    enabled: false,
  },
  upload: {
    config: {
      security: {
        enabled: true,
        fileTypes: ['image', 'video', 'audio', 'pdf', 'text'],
      },
    },
  },
});
