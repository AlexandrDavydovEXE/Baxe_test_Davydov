/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';
jest.mock('react-native', () => {
  return {
    Linking: {
      openURL: jest.fn(),
    },
    Platform: {
      OS: jest.fn(),
      // OS: 'ios',
    },
  };
});
// let NativeBaseProvider;
jest.mock('native-base', () => {
  return {
    NativeBaseProvider: jest.fn(),
  };
});
jest.mock('@react-navigation/bottom-tabs', () => {
  return {
    createBottomTabNavigator: jest.fn(),
  };
});
jest.mock('react-native-svg', () => {
  return {
    Path: jest.fn(),
  };
});
beforeEach(() => {
  // Platform = require('react-native').Platform;
  // NativeBaseProvider = require('native-base').NativeBaseProvider;
});

describe('ios tests', () => {
  beforeEach(() => {
    Platform.OS = 'ios';
  });

  it('should test something on iOS', () => {
    render(<App />);
  });
});
// it('renders correctly', () => {
//   render(<App />);
// });

// import 'react-native';
//
// // Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
//
// import App from '../App';
//
// describe('app', () => {
//   it('renders correctly', () => {
//     expect.assertions(1);
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
