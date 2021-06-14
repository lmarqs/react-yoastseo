import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

function buildCfg(format, plugins = []) {
  return {
    input: "./src/index.ts",
    output: {
      name: "ReactYoastSeo",
      sourcemap: true,
      exports: "auto",
      file: `dist/react-yoastseo.${format}.js`,
      format,
    },
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            declaration: true,
            module: "ESNext",
            target: "ESNext",
          },
          include: ["src"],
        },
      }),
      resolve(),
    ],
    external: [
      "react",
      "yoastseo",
      "yoastseo/src/worker",
    ],
  };
}

module.exports = [
  buildCfg("cjs"),
  buildCfg("es"),
  buildCfg("umd"),
];
