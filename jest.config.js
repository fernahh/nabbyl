const argv = require('yargs').argv
const env = argv.env || 'development'

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/setup-tests.js',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/mocks/**/*.js'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@environment$': `<rootDir>/environments/${env}.js`,
    '@src\/(.*)$': `<rootDir>/src/$1`,
  },
  transform: {
    '^.+\\.(css|scss)$': '<rootDir>/__mocks__/styles-mock.js',
    '^.+\\.js$': 'babel-jest'
  },
  setupTestFrameworkScriptFile: '<rootDir>/src/setup-tests.js'
}
