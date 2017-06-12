import React from 'react';
import styled from 'styled-components';

import Col from '../Col';
import List from '../List';
import ListItem from '../List/ListItem';
import FooterItem from '../FooterItem';
import Row from '../Row';
import Header from '../Header';

const FooterCore = ({ className }) => {
  return (
    <footer className={className}>
      <Row middle>
        <Col width={3}>
          <Header>#freshlybrewers</Header>
        </Col>
        <Col width={3}>
          <FooterItem>
            <List header="Registry">
              <ListItem><a>Target</a></ListItem>
              <ListItem><a>Anthropology</a></ListItem>
              <ListItem><a>IKEA</a></ListItem>
              <ListItem><a>West Elm</a></ListItem>
            </List>
          </FooterItem>
        </Col>
        <Col width={3}>
          <FooterItem>
            <List header="Gallery">
              <ListItem><a>Engagement</a></ListItem>
              <ListItem><a>Venue</a></ListItem>
              <ListItem><a>Funsies</a></ListItem>
            </List>
          </FooterItem>
        </Col>
        <Col width={3}>
          <FooterItem>
            <List header="Information">
              <ListItem><a>Hotel and accomodations</a></ListItem>
              <ListItem><a>Directions</a></ListItem>
              <ListItem><a>Parking</a></ListItem>
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
`

export default Footer;