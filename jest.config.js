/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'react-native',
  globals: {
    __DEV__: true,
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json',
    },
  },
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
    // '\\.tsx?$': '@babel/preset-typescript',
    '\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    // '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    // 'react-native-code-push': '<rootDir>/__mocks__/react-native-code-push.js',
    // '@react-navigation': '<rootDir>/__mocks__/@react-navigation.js',
  },
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
    'd.ts',
  ],
  testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
  // transformIgnorePatterns: [
  //   '<rootDir>/node_modules/(react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|native-base|react-native-code-push)',
  // ],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/(?!(react-native|@testing-library|testing-library|react-base|@react-base|@react-native)/)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '\\.snap$'],
  cacheDirectory: '.jest/cache',
  testEnvironment: 'jsdom',
  // setupFiles: ['<rootDir>/__mocks__/mock-setup.js'],
};
