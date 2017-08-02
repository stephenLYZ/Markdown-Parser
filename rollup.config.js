import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'

let pkg = require('./package.json')

export default {
  moduleName: pkg.name,
  entry: './src/index.js',
  useStrict: false,
  sourceMap: true,
  plugins: [
    resolve(), 
    commonjs(), 
    uglify()
  ],
  targets: [
    {
      format: 'cjs',
      dest: pkg.module
    },
    {
      format: 'iife',
      dest: pkg.main
    }
  ]
}