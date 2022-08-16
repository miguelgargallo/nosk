module.exports = {
  eslint: {
    dirs: ['pages', 'components'],
  },
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
      },
    }
    return config
  },
  images: {
    domains: ['api.microlink.io'],
  },
}
