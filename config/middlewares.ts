export default [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  {
    name: "strapi::body",
    config: {
      formLimit: "512mb", // Form body size limit
      jsonLimit: "512mb", // JSON body size limit
      textLimit: "512mb", // Text body size limit
      formidable: {
        maxFileSize: 512 * 1024 * 1024, // 512MB in bytes
      },
    },
  },
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
