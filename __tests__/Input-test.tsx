import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {Input} from 'components/Input';

describe('Input', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = renderer
        .create(<Input title={'Input your name!'} />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
  });
});
