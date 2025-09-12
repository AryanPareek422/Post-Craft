import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:'stackoverflow.com',
        protocol:'https',
        port: undefined,
        pathname: '/**',

      },
      {
        hostname:'lh3.googleusercontent.com',
        protocol:'https',
        port: undefined,
        pathname: '/**',
      }
      ,
      {
        hostname:'drive.google.com',
        protocol:'https',
        port: undefined,
        pathname: '/**',
      }
    ]

  }
};

export default nextConfig;
