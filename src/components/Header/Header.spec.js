import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

it('renders correctly', () => {
  const tree = renderer.create(
    <Header tag="h4">
      Test Header
    </Header>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
