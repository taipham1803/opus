import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Button} from 'components/Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer.create(<Button title={'Sign in!'} />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});

// describe('onPressHandler', () => {
//   it('should call onPress', () => {
//     const mockOnPress = jest.fn(); // 1. mock function
//     const component = renderer.create(
//       <Button
//         title="test label"
//         onPress={mockOnPress} // 2. passing in mock function as props
//       />,
//     );
//     // 3. getting an instance of component
//     const instance: any = component.getInstance();
//     // 4. manually triggering onPressHandler()
//     instance?.onPressHandler();
//     // Act
//     expect(mockOnPress).toHaveBeenCalled();
//   });
// });
