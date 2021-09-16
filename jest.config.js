module.exports = {
  roots: ['<rootDir>/src'],
  testEnvironment: 'node',
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/main/**',
    '!<rootDir>/src/**/*-protocols.ts',
    '!**/protocols/**',
    '!**/test/**'
  ],
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
