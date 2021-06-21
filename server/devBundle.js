import config from "./../config/config";
import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "./../webpack.config.client";

const compile = (app) => {
    if(config.env === "development") {
        const compiled = webpack(webpackConfig);
        const middleware = webpackMiddleware(compiled, {
            publicPath: webpackConfig.output.publicPath
        });
        app.use(middleware);
        app.use(webpackHotMiddleware(compiled));
    }
};

export default {
    compile
}