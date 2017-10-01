import React from 'react';
import styled from 'styled-components';
import { slide as Menu } from 'react-burger-menu'

import MediaWidths from '../../../styles/helpers/MediaWidths';
import Colors from '../../../styles/helpers/Colors';

import Col from '../../Col';
import Row from '../../Row';
import Image from '../../Image';
import NavItem from '../../NavItem';

import logo from '../../../images/logo.svg';

const styles = {
  bmBurgerButton: {
    position: 'relative',
    width: '36px',
    height: '30px',
    right: '25px',
    top: '-63px',
    float: 'right',
  },
  bmBurgerBars: {
    background: Colors.black,
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    top: 0,
  },
  bmMenu: {
    background: Colors.white,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: Colors.richBlack,
    padding: '0.8em'
  },
  bmOverlay: {
    top: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

class MobileNavCore extends React.Component {
  render() {
    const { className } = this.props;

    return (
      <div className={className}>
        <Col
          mobileWidth={2}
          center
        >
          <Image
            height="100px"
            marginLeft="25px"
            src={logo}
          />
        </Col>

        <Menu isOpen={false} right styles={styles}>
          <NavItem to="/">HOME</NavItem>
          <NavItem to="/details">DETAILS</NavItem>
          <NavItem to="/rsvp">RSVP</NavItem>
          <NavItem to="#">REGISTRY</NavItem>
        </Menu>
      </div>
    )
  }
}

const MobileNav = styled(MobileNavCore)`
  display: none;

  @media (${MediaWidths.mobile}) {
    padding-top: 20px;
    display: block;
    background-color: white;
    width: 100%;
    top: 27px;
    height: 150px;
  }
`

export default MobileNav;
