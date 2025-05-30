# Webpack Setup & Learning

This repository contains a Webpack setup created as part of my learning journey through the **Webpack course by Eve Porcello** on LinkedIn Learning. It walks through key Webpack concepts such as bundling, loaders, plugins, dev server setup, code splitting, and production optimization.

---

## 📦 What is Webpack?

Webpack is a powerful **JavaScript module bundler**. It takes modules with dependencies and generates optimized static assets. Webpack is capable of handling:
- JavaScript (ES6+, JSX)
- CSS and images
- Code splitting
- Development and production builds

---

## 📁 Project Structure
```js
├── dist/
├── src/
│ ├── index.js
│ ├── index.html
│ └── styles.css
├── webpack.config.js
├── package.json
└── README.md
```

---

## 🚀 Features Implemented

### ✅ Webpack 4 Configuration
- Custom `webpack.config.js` with:
  - `entry` and `output`
  - `babel-loader` for JS/JSX transpilation
  - `style-loader` and `css-loader` for CSS
  - `url-loader` for images
  - `HtmlWebpackPlugin` for HTML template
  - `UglifyJsPlugin` for production minification

### ✅ Babel (JS & React Support)
Transpiles ES6+ and JSX using:
```bash
npm install babel-loader @babel/core @babel/preset-env @babel/preset-react --save-dev
```
### ✅ CSS & Image Loaders
For handling styles and assets:
```bash
npm install style-loader css-loader url-loader --save-dev
```
### ✅ Dev Server
Live reloading via Webpack Dev Server:
```bash
npm install webpack-dev-server@3 --save-dev
```
### ✅ HTML Webpack Plugin
Automatically injects bundled files into HTML:
```bash
npm install html-webpack-plugin@4 --save-dev
```

### ✅ UglifyJS Plugin
Minifies JavaScript in production mode:
```bash
npm install uglifyjs-webpack-plugin --save-dev
```

## 🛠️ webpack.config.js (Highlights)
```js
entry: "./src/index.js",
output: {
  filename: "main.js",
  path: path.resolve(__dirname, "dist"),
},
plugins: [
  new HtmlWebpackPlugin({ template: "./src/index.html" }),
],
optimization: {
  minimizer: [new UglifyJsPlugin()],
},
devServer: {
  contentBase: path.join(__dirname, "dist"),
  port: 9000,
},
```

## 🧩 Code Splitting (Optional)
```js
optimization: {
  splitChunks: {
    chunks: 'all'
  }
}
```
This helps split shared libraries (like react) into separate bundles for improved performance.

## 🧪 Running the App
### Development
```js
npm install
npm start  # uses webpack-dev-server
```
 ### Production Build
 ```js
 npm run build  # generates minified output in /dist
```

## 🧠 Key Learnings
```bash
-> Webpack is highly configurable and supports a wide range of use cases.
-> Loaders transform different types of assets (JSX, CSS, images).
-> Plugins extend functionality (HTML generation, minification, etc.).
-> Dev server improves development speed via live reloading.
-> Production builds optimize bundle size via minification and splitting.
```