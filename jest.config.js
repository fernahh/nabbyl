module.exports = {
  clearMocks: true,
  collectCoverageFrom: ["src/**/*.js"],
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
