import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCSSLoaders";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const babelLoader = {
    test: /\.m?(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        "plugins": [
          [
            "i18next-extract",
            { locales: ["ru", "en"], keyAsDefaultValue: true },
          ],
        ],
      },
    },
  };

  const cssLoader = buildCssLoader(true);

  const typeScriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    loader: "file-loader",
    options: {
      name: "[path][name].[ext]",
    },
  };
  return [babelLoader, typeScriptLoader, cssLoader, fileLoader, svgLoader];
}
