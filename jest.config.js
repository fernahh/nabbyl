module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    "src/**/*.js",
    "!<rootDir>/node_modules/",
    "!<rootDir>/src/setup-tests.js",
    "!<rootDir>/src/application.js",
    "!<rootDir>/src/mocks/**/*.js"
  ],
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  coverageReporters: ["html"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  transform: {
    "^.+\\.(css|scss)$": "<rootDir>/src/mocks/styles-mock.js",
    "^.+\\.js$": "babel-jest"
  },
  setupTestFrameworkScriptFile: "<rootDir>/src/setup-tests.js"
}
