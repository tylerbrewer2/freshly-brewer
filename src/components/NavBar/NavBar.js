import React from 'react';
import styled from 'styled-components';

import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const NavBar = ({ className }) => {
  return (
    <div className={className}>
      <DesktopNav />
      <MobileNav />
    </div>
  )
}

export default NavBar;