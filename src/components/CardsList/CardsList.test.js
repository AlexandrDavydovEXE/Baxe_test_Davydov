// import React from 'react';
// import renderer from 'react-test-renderer';
// import CardsList from './CardsList';
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
//
//   // it('should render a ScrollView', () => {
//   //   expect(wrapper.find('ScrollView').length).toEqual(1);
//   // });
//   //
//   // it('should render the appropriate number of cards', () => {
//   //   expect(wrapper.find('Card').length).toEqual(mockData.length);
//   // });
// });
import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ScrollView, StyleSheet, View} from 'react-native';
import CardsList from './CardsList';
import {mockData} from './mockData';

describe('CardsList component', () => {
  it('renders the component', () => {
    const {getByTestId} = render(<CardsList />);
    expect(getByTestId('CardsList')).toBeTruthy();
  });

  it('renders the cards from mockData', () => {
    const {getByTestId} = render(<CardsList />);
    expect(getByTestId('card')).toBeTruthy();
    expect(mockData.length).toBe(3);
  });
});
