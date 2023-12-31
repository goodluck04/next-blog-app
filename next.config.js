/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      // another links for external images domain name for security reasons
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/',
        destination: 'https://next-blog-app-alpha-ochre.vercel.app/'
      }
    ]
  }
  // async headers() {
  //     return [
  //         {
  //             // matching all API routes
  //             source: "/api/:path*",
  //             headers: [
  //                 { key: "Access-Control-Allow-Credentials", value: "true" },
  //                 { key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
  //                 { key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
  //                 { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
  //             ]
  //         }
  //     ]
  // }
}

module.exports = nextConfig
