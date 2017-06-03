import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

it('renders correctly', () => {
  const tree = renderer.create(
    <List header="Test header">
      Test children
    </List>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
