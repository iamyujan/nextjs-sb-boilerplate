// next.config.js
module.exports = {
  images: {
    domains: ['a.storyblok.com', 'img2.storyblok.com', 'res.cloudinary.com'],
    // loader: 'url-loader',
    // path: 'https://img2.storyblok.com'
    // deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // imageSizes: [160, 320, 375, 414, 540, 600, 960, 1024, 1920],
    
    // Temporarily commented the loader and path because it only allows single loader
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/yujan/image/upload/'
  },
  target: "serverless",
}