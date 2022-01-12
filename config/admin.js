module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b585305e093aeaca165e214728ba5925'),
  },
});
