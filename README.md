# Certifications
Certification courses from LinkedIn Learning.
Webpack by Eve Porcello:
-> Webpack is a module bundler which takes your code and assets and returns a minified version of it.
-> In this course we are using webpack4.
-> Webpack helps in code splitting.
-> Webpack supports dev and production builds.
-> The difference between dev and production bundle is production bundle is prioritized based on the size and dev build is prioritized based on the speed.
-> Installation:
    -> npm install webpack@4.28.4 --save-dev
    -> npm install webpack-cli@3.2.1 --save-dev
-> Running(code in webpack.config.js):
    -> We generally use module.exports object for our config.
    -> we give input and output with entry point and bundled version is created in the output path.
    
-> Webpack loaders:
    -> These loaders can perform transformation on files.
    -> These help load files and images.
    -> Deal with dialects like jsx,xml.
    -> So when you write a code in jsx or ES6+ js all these are compiled to pure JS and loaded into browser. This is done using babel-loader and this is called transpiling.
-> Installing babel loader:
    -> npm install babel-loader@8 @babel/core --save-dev
    -> Using babel:
        module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader'
            }
        }
        ]
        }
    ->Even after using the above we mmight not see a much difference so we use babel preset-env
    