import typescript from 'rollup-plugin-typescript'

export default {
  input: 'src/main.ts', // Punto de entrada principal de tu aplicación
  output: {
    file: 'dist/bundle.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [
    typescript()
  ]
}
