const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV !== 'production',
})

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  experimental: {
    appDir: false,
  },
});

module.exports = nextConfig
