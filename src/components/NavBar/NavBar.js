import React from 'react';
import styled from 'styled-components';

import Row from '../Row';
import Col from '../Col';
import Header from '../Header';
import FloatWrapper from '../FloatWrapper';

import NavItem from './NavItem';

const NavBarCore = ({ className }) => {
  return(
    <Row
      className={className}
      middle
    >
      <Col width={6}>
        <Header tag="h1">MORGAN & TYLER</Header>
      </Col>
      <Col width={6}>
        <FloatWrapper direction='right'>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/">CEREMONY</NavItem>
          <NavItem to="/">GALLERY</NavItem>
          <NavItem to="/">PARTY</NavItem>
          <NavItem to="/">FAQ</NavItem>
        </FloatWrapper>
      </Col>
    </Row>
  )
}

const NavBar = styled(NavBarCore)`
  height: 100px;
  max-width: 90%;
  margin: 0 auto;
`

export default NavBar;