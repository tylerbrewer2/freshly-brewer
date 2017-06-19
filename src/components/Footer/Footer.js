import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import List from '../List';
import ListItem from '../List/ListItem';
import FooterItem from '../FooterItem';
import Row from '../Row';
import Header from '../Header';

// Style Helpers
import MediaWidths from '../../styles/helpers/MediaWidths';

const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
        <Col mobileWidth={12} tabletWidth={3}>
          <Header mobileMarginBottom="30px">#freshlybrewers</Header>
        </Col>
        <Col mobileWidth={12} tabletWidth={3}>
          <FooterItem>
            <List header="Registry">
              <ListItem>Coming Soon!</ListItem>
            </List>
          </FooterItem>
        </Col>
        <Col mobileWidth={12} tabletWidth={3}>
          <FooterItem>
            <List header="Gallery">
              <ListItem>Coming Soon!</ListItem>
            </List>
          </FooterItem>
        </Col>
        <Col mobileWidth={12} tabletWidth={3}>
          <FooterItem>
            <List header="Information">
              <ListItem>Coming Soon!</ListItem>
            </List>
          </FooterItem>
        </Col>
      </Row>
    </footer>
  )
}

const Footer = styled(FooterCore)`
  padding: 120px 0;
  border-top: .5px solid #4A4A4A;
  max-width: 90%;
  margin: 0 auto;

  @media (${MediaWidths.mobile}) {
    padding: 30px 0;
  }
`

export default Footer;