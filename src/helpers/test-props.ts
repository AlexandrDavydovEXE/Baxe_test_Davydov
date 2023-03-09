import {Platform} from 'react-native';

/**
 * Gets the test props
 * @param id The id
 * @param accessibility The accessibility
 * @returns {object} Returns the testID and the accessibility for the element
 */

export const getTestProps = (id: string, accessibility = true): object => {
  return Platform.OS === 'android'
    ? {accessible: accessibility, accessibilityLabel: id}
    : {accessible: accessibility, testID: id};
};
