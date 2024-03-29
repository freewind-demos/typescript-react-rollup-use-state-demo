import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'index.ts',
  output: [
    {
      file: 'bundle.js',
      format: 'cjs',
    }
  ],
  plugins: [
    resolve(),
    commonjs({
      namedExports: {
        'react': ['useState']
      }
    }),
    typescript(),
  ]
};
