import { uglify } from 'rollup-plugin-uglify';
import resolve from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript';
import size from 'rollup-plugin-size';
import commonjs from '@rollup/plugin-commonjs'

module.exports = [{
  input: 'src/index.ts',
  output: {
    file: 'dist/g2plot-qrcode.min.js',
    name: 'G2PlotQrcode',
    format: 'umd',
    sourcemap: false,
  },
  plugins: [
    resolve(),
    typescript(),
    commonjs(),
    uglify(),
    size(),
  ],
}];
