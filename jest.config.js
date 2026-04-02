module.exports = {
  clearMocks: true,
  coverageDirectory: "coverage",
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  moduleNameMapper: {
    "^@App/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironment: "jsdom",
  transform: {
    '^.+\\.ts?$': ['ts-jest', {
      useESM: false,
    }]
  },
  verbose: true,
};
