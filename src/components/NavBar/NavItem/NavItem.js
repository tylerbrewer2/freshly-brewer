import styled from 'styled-components';
import { Link } from 'react-router-dom';

const richBlack = '#4A4A4A'

const NavItem = styled(Link)`
  font-family: 'AvenirNextBold', 'Helvetica', 'sans-serif';
  list-style: none;
  margin-left: 30px;
  float: left;
  font-size: 12px;
  color: ${richBlack};
  letter-spacing: 3px;
  text-decoration: none;
`

export default NavItem;
