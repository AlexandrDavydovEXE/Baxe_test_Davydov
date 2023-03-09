import React from 'react';
import renderer from 'react-test-renderer';
import CardsList from './CardsList';
// import {mockData} from './mockData';
// import {NativeBaseProvider} from 'native-base/src/core/NativeBaseProvider';
//
// describe('CardsList', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = renderer
//       .create(
//         <NativeBaseProvider>
//           <CardsList />
//         </NativeBaseProvider>,
//       )
//       .toJSON();
//   });
//
//   it('should render correctly', () => {
//     expect(wrapper).toMatchSnapshot();
//   });

// it('should render a ScrollView', () => {
//   expect(wrapper.find('ScrollView').length).toEqual(1);
// });
//
// it('should render the appropriate number of cards', () => {
//   expect(wrapper.find('Card').length).toEqual(mockData.length);
// });
// });
// import React from 'react';
// import {render, fireEvent} from '@testing-library/react-native';
// import CardsList from './CardsList';
// import {mockData} from './mockData';
// import {Dimensions} from 'react-native';

// const mockDimensions = ({width}) => {
//   // jest.resetModules()
//   jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
//     get: jest.fn().mockReturnValue({width}),
//   }));
// };
// jest.spyOn(Dimensions, 'get').mockReturnValue({width: 414, height: 818});
// jest.mock('StyleSheet', () => ({
//   create: jest.fn().mockReturnValue({test: 'test'}),
// }));
// jest.mock('StyleSheet', () => {
//   return {
//     create: jest.fn().mockReturnValue({
//       styleName: {
//         color: 'red',
//       },
//     }),
//   };
// });

// jest.mock('react-native/Libraries/StyleSheet', () => {
//   const {StyleSheet} = jest.requireActual('react-native/Libraries/StyleSheet');
//
//   return {
//     StyleSheet,
//     View: jest.fn(props => <view-mock {...props} />),
//   };
// });
//
// jest.mock('react-native/Libraries/StyleSheet/StyleSheet', () => {
//   const create = jest.fn(() => {});

// jest.mock('OS', () => 'IOS');
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

// jest.mock('native-base', () => {
//   const {Button, Box} = jest.requireActual('native-base');
//
//   return {
//     Button,
//     Box,
//   };
// });
jest.mock('react-native-svg', () => {
  return {
    Path: jest.fn(),
  };
});

// function renderCardsList() {
//   return render(<CardsList />);
// }

// describe('CardsList component', () => {
//   let wrapper;
//   wrapper = renderer
//     .create(
//       // <NativeBaseProvider>
//       <CardsList />,
//       // </NativeBaseProvider>,
//     )
//     .toJSON();
//   it('renders the component', () => {
//     expect(wrapper).toBeTruthy();
//   });
//
//   // it('renders the cards from mockData', () => {
//   //   const {getByTestId} = render(<CardsList />);
//   //   expect(getByTestId('card')).toBeTruthy();
//   //   expect(mockData.length).toBe(3);
//   // });
// });
import {cleanup, fireEvent, render} from '@testing-library/react';
// import CardsList from './CardsList';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckboxWithLabel changes the text after click', () => {
  const wrapper = render(<CardsList />);
  console.log('wrapper', wrapper);

  expect(wrapper).toBeTruthy();
});
