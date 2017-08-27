import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import Row from '../Row';
import FloatWrapper from '../FloatWrapper';
import Link from '../Link';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';


const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
      <Col mobileWidth={8}>
        <Link href="https://www.target.com/gift-registry/giftgiver?registryId=f76014b013f1404994d1282377250466">TARGET REGISTRY</Link>
        <Link href="https://www.amazon.com/wedding/morgan-parsons-tyler-brewer-baltimore-december-2017/registry/1JZH2LWLZ1E2Y">AMAZON REGISTRY</Link>
        <Link href="https://www.anthropologie.com/registry/listing?registryId=MGU3YJU5YTVH">ANTHROPOLOGIE REGISTRY</Link>
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