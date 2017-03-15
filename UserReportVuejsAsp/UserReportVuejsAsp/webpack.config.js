//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: //'./Try1.js', // for js test
        //'./TypescriptTest.ts' // for ts test,
        './example.ts'
    ,
    output: {
        path: './dist',
        filename: 'build.js'//,
        //pathinfo: true // https://webpack.js.org/configuration/output/#output-pathinfo  Don't User for Production!
    },
    resolve: {
        extensions: ['.ts', '.js'],
        // Boris: if the client is going to be parsing vue templates: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
        //alias: {
        //    'vue': 'vue/dist/vue.js' // 'vue/dist/vue.common.js' for webpack 1
        //}
    },
    module: {
        rules: [
          {
              test: /\.ts$/,
              exclude: /node_modules/,
              loader: 'ts-loader',
              options: {
                  appendTsSuffixTo: [/\.vue$/]
              }
          },
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: 
                      {}
                  //esModule: true
              }
          },
          {
              test: /\.html$/, use: 'vue-template-loader' // transform HTML templates into JS, so that there is no need to send the compiler to client
          }

         //{
         //     test: /\.vue$/,
         //     loader: 'vue-loader',
         //     options: {
         //         loaders: {
         //             css: ExtractTextPlugin.extract({
         //                 use: 'css-loader',
         //                 fallback: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
         //             })
         //         }
         //     }
         // }
        ]
    },
    //plugins: [
    //    new ExtractTextPlugin("style.css")
    //],
    //output: {
        //devtoolModuleFilenameTemplate: info => { // https://webpack.js.org/configuration/output/#output-devtoolmodulefilenametemplate
        //    if (info.resource.match(/\.vue$/)) {
        //        $filename = info.allLoaders.match(/type=script/)
        //                  ? info.resourcePath : 'generated';
        //    } else {
        //        $filename = info.resourcePath;
        //    }
        //    return $filename;
        //},
      //  pathinfo: true // https://webpack.js.org/configuration/output/#output-pathinfo  Don't User for Production!
    //},
    devtool: 'source-map'
    // Boris:
    // devServer: {
    //       port: metadata.port,
    //       host: metadata.host,
    //       historyApiFallback: true,
    //       watchOptions: { aggregateTimeout: 300, poll: 1000 }
    //   }
}
