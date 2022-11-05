export type BuildMode = "production" | "development";

export interface BuildPathes {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
}

export interface BuildOptions {
  mode: BuildMode;
  pathes: BuildPathes;
  isDev: boolean;
  port: number;
}
