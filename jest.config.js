const argv = require('yargs').argv
const env = argv.env || 'development'

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.js',
    '!<rootDir>/node_modules/',
    '!<rootDir>/src/setup-tests.js',
    '!<rootDir>/src/index.js',
    '!<rootDir>/src/application.js',
    '!<rootDir>/src/mocks/**/*.js'
  ],
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageReporters: ['html'],
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 95,
      functions: 95,
      lines: 95
    }
  },
  moduleNameMapper: {
    '@environment$': `<rootDir>/environments/${env}.js`,
    '@src\/(.*)$': `<rootDir>/src/$1`,
    'balloon-css': '<rootDir>/src/mocks/styles-mock.js'
  },
  transform: {
    '^.+\\.(css|scss)$': '<rootDir>/src/mocks/styles-mock.js',
    '^.+\\.js$': 'babel-jest'
  },
  setupFilesAfterEnv: [
    '<rootDir>/src/setup-tests.js'
  ]
}
