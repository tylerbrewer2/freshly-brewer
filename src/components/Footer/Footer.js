import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';
import Section from '../Section';
import FloatWrapper from '../FloatWrapper';
import FooterLink from './FooterLink';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';
import Colors from '../../styles/helpers/Colors';

const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
        <Col  mobileWidth={12}>
          417 Benninghaus Rd, Baltimore, MD 21212
        </Col>
      </Row>
    </footer>
  )
}

const Footer = styled(FooterCore)`
  font-size: 12px;
  padding: 40px;
  margin: 0 auto;
  margin-top: 40px;
  border-top: 1px solid ${Colors.richBlack};

  @media (${MediaWidths.mobile}) {
    margin-left: 0;
    margin-top: 20px;
  }
`

export default Footer;