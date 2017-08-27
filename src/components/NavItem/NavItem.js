import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Fonts from '../../styles/helpers/Fonts';

const richBlack = '#4A4A4A'

const NavItem = styled(Link)`
  font-family: ${Fonts.body};
  list-style: none;
  margin-top: ${ props => props.marginTop ? props.marginTop : '85px'};
  margin-left: 45px;
  margin-right: 45px;
  float: left;
  font-size: 12px;
  color: ${richBlack};
  letter-spacing: 3px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export default NavItem;
