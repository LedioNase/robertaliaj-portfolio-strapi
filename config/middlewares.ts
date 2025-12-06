export default [
  'strapi::logger',
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          'media-src': ["'self'", 'data:', 'blob:', 'res.cloudinary.com'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  {
    name: 'strapi::body',
    config: {
      formLimit: '512mb',    // Form body size limit
      jsonLimit: '512mb',    // JSON body size limit
      textLimit: '512mb',    // Text body size limit
      formidable: {
        maxFileSize: 512 * 1024 * 1024, // 512MB in bytes
      },
    },
  },
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
