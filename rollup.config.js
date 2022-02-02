import sass from 'rollup-plugin-styles'
// import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

import pkg from './package.json'

export default {
  input: 'src/lib/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false
    }
  ],
  plugins: [
    sass({ insert: true }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/env', '@babel/preset-react']
    }),
    commonjs()
  ],
  external: ['react', 'react-dom']
}