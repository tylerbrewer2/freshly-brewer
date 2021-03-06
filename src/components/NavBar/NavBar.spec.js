import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NavBar from './NavBar';

it('renders correctly', () => {
  const tree = renderer.create(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
