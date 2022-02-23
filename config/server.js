module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('66418116-a6c3-48e3-b1a6-85788c07e8f3'),
  },
});
