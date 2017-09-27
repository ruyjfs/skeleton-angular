// var path = require('path');
// var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
//
// const PUBLIC_PATH = 'https://www.my-project-name.com/';  // webpack needs the trailing slash for output.publicPath
//
// module.exports = {
//     // navigationFallback: '/index.html',
//     entry: {
//         main: path.resolve(__dirname, 'src/index')
//     },
//     output: {
//         path: path.resolve(__dirname, 'src/bundles/'),
//         filename: '[name]-[hash].js',
//         publicPath: PUBLIC_PATH,
//     },
//     plugins: [
//         new SWPrecacheWebpackPlugin(
//             {
//                 cacheId: 'skeleton-angular-pwa',
//                 dontCacheBustUrlsMatching: /\.\w{8}\./,
//                 filename: 'service-worker.js',
//                 minify: true,
//                 navigateFallback: PUBLIC_PATH + 'index.html',
//                 staticFileGlobsIgnorePatterns: [/\.map$/, /asset-manifest\.json$/],
//             }
//         ),
//     ],
// }
//    "precache": "sw-precache --root=src/assets/pwa/ --verbose"
// module.exports = {
//     staticFileGlobs: [
//         'src/**.html',
//         'src/**.js',
//         'src/**.css',
//         'src/assets/images/*',
//         'src/assets/icons/*'
//     ],
//     root: 'src/assets/pwa/',
//     stripPrefix: 'src/',
//     navigateFallback: '/index.html'
// };
module.exports = {
    staticFileGlobs: [
        'dist/**.html',
        'dist/**.js',
        'dist/**.css',
        'dist/assets/images/*',
        'dist/assets/icons/*'
    ],
    root: 'dist',
    stripPrefix: 'dist/',
    navigateFallback: '/index.html'
};