module.exports = {
  transform: {
    '^.+\\.[jt]s$': 'babel-jest',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}
