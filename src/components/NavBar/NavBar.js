import React from 'react';
import styled from 'styled-components';

import Row from '../Row';
import Col from '../Col';
import FloatWrapper from '../FloatWrapper';
import Image from '../Image';
import NavItem from '../NavItem';

import logo from '../../images/logo.svg';

const NavBarCore = ({ className }) => {
  return(
    <Row
      className={className}
      middle
    >
      <Col mobileWidth={5}>
        <FloatWrapper direction='right'>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="#">DETAILS</NavItem>
        </FloatWrapper>
      </Col>
      <Col
        mobileWidth={2}
        center
      >
        <Image
          height="100px"
          src={logo}
        />
      </Col>
      <Col mobileWidth={5}>
        <FloatWrapper direction='left'>
          <NavItem to="/rsvp">RSVP</NavItem>
          <NavItem to="#">REGISTRY</NavItem>
        </FloatWrapper>
      </Col>
    </Row>
  )
}

const NavBar = styled(NavBarCore)`
  height: 150px;
  max-width: 90%;
  margin: 0 auto;
`

export default NavBar;