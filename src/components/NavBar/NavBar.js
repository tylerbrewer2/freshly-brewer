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
      <Col mobileWidth={6}>
        <Header tag="h1">MORGAN & TYLER</Header>
      </Col>
      <Col mobileWidth={6}>
        <FloatWrapper direction='right'>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/rsvp">RSVP</NavItem>
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