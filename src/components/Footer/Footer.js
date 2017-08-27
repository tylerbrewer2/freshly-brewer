import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';
import NavItem from '../NavItem';
import FloatWrapper from '../FloatWrapper';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';


const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
      <Col mobileWidth={8}>
        <NavItem marginTop="0" to="/">HOME</NavItem>
        <NavItem marginTop="0" to="/rsvp">RSVP</NavItem>
        <NavItem marginTop="0" to="#">GALLERY</NavItem>
      </Col>
      <Col mobileWidth={4}>
        <FloatWrapper direction="right">
          417 Benninghaus Rd, Baltimore, MD 21212
        </FloatWrapper>
      </Col>
      </Row>
    </footer>
  )
}

const Footer = styled(FooterCore)`
  font-size: 12px;
  padding: 40px;
  max-width: 90%;
  margin: 0 auto;

  @media (${MediaWidths.mobile}) {
    padding: 30px 0;
  }
`

export default Footer;