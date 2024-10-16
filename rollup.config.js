// Dependencies
import terser from '@rollup/plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: "lib/main.ts",
    watch: {
      buildDelay: 500
    },
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "tsconfig.build.json"
      }),
      terser({
        format: {
          preamble: '\'use client\';',
        }
      }),
      postcss({
        extract: true, // This will create a separate CSS file
        modules: true, // Enable CSS modules if you need them
        minimize: true, // Minify CSS
        sourceMap: true, // Enable source maps for CSS
      })
    ],
    output: [
      {
        file: "dist/main.js",
        format: "esm",
      },

    ]
  },
  {
    input: "dist/types/main.d.ts",
    output: [{ file: "dist/main.d.ts", format: "esm" }],
    plugins: [dts()],
    watch: {
      buildDelay: 500
    }
  }
];