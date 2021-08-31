module.exports = {
  reactStrictMode: true,
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/api/:path*', // The :path parameter is used here so will not be automatically passed in the query
        },
      ]
    },
}
