/**
 * @type {import('next').NextConfig}
 */
const IsProd = process.env.NODE_ENV === 'production';
const nextConfig = {
  basePath: IsProd ? '/my-profile' : '',
  output: 'export',
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig