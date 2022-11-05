import { buildCssLoader } from "../build/loaders/buildCSSLoaders";
import path from "path";
import webpack, { RuleSetRule } from "webpack";
import { BuildPathes } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
  const pathes: BuildPathes = {
    build: "",
    entry: "",
    html: "",
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(pathes.src);
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i };
    }
    return rule;
  });

  config.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  config.module?.rules?.push(buildCssLoader(true));

  return config;
};

// import webpack, { RuleSetRule } from 'webpack';
// import path from 'path';
// import { buildCssLoader } from '../build/loaders/buildCssLoader';
// import { BuildPaths } from '../build/types/config';

// export default ({ config }: {config: webpack.Configuration}) => {
//     const paths: BuildPaths = {
//         build: '',
//         html: '',
//         entry: '',
//         src: path.resolve(__dirname, '..', '..', 'src'),
//     };
//     config.resolve.modules.push(paths.src);
//     config.resolve.extensions.push('.ts', '.tsx');

//     // eslint-disable-next-line no-param-reassign
//     config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
//         if (/svg/.test(rule.test as string)) {
//             return { ...rule, exclude: /\.svg$/i };
//         }

//         return rule;
//     });

//     config.module.rules.push({
//         test: /\.svg$/,
//         use: ['@svgr/webpack'],
//     });
//     config.module.rules.push(buildCssLoader(true));

//     return config;
// };
