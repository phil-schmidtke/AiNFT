/** @type {import('next').NextConfig} */

require('dotenv').config({ path: '.env'});

const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    OPENAI: process.env.OPENAI,
  }
}

module.exports = nextConfig
