// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
// });

module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("qFBMFGEqnTxtkc5Jj5/omQ==", ["YbUv11JpnFnMWT44BMcLFw==", "Nx6M073Ap17L76jMB6Cy1Q=="]),
  },
});