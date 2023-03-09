import React from 'react';
jest.mock('native-base', () => {
  return {
    Mixin: {
      Mixin: jest.fn(),
    },
  };
});

jest.mock('react-native', () => {
  const {StyleSheet, Platform} = jest.requireActual('react-native');

  return {
    StyleSheet: {
      create: jest.fn(styles => styles),
    },
    Platform: {
      select: jest.fn(),
      OS: jest.fn(() => 'android'),
      version: jest.fn(() => 25),
    },
    View: jest.fn(props => <view-mock {...props} />),
  };
});

jest.mock('native-base', () => {
  const {Button, Box} = jest.requireActual('native-base');

  return {
    Button,
    Box,
  };
});
jest.mock('react-native-svg', () => {
  return {
    Path: jest.fn(),
  };
});
