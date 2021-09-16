module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  // configuracion de coverage
  collectCoverage: true,
  coverageDirectory: 'coverage/book-list-app',
};
