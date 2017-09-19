import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';
import Section from '../Section';
import FloatWrapper from '../FloatWrapper';
import FooterLink from './FooterLink';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
        <Col tabletWidth={8} mobileWidth={12}>
          <FooterLink href="https://www.target.com/gift-registry/giftgiver?registryId=f76014b013f1404994d1282377250466">TARGET REGISTRY</FooterLink>
          <FooterLink href="https://www.amazon.com/wedding/morgan-parsons-tyler-brewer-baltimore-december-2017/registry/1JZH2LWLZ1E2Y">AMAZON REGISTRY</FooterLink>
          <FooterLink href="https://www.anthropologie.com/registry/listing?registryId=MGU3YJU5YTVH">ANTHROPOLOGIE REGISTRY</FooterLink>
        </Col>
        <Col tabletWidth={4} mobileWidth={12}>
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
    margin-left: 0;
  }
`

export default Footer;