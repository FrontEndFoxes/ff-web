module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  globals: {
  },
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\js$": "babel-jest"
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**',
    '!src/**/*.js',
  ],
}
