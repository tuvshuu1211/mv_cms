module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '41739e5e7fe85bc716593474b99858d1'),
  },
});
