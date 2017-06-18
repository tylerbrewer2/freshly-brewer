import React from 'react';
import styled from 'styled-components';

const HeaderCore = ({ className, tag, marginBottom, children }) => {
  const HeaderTag = tag || "h1";

  return (
    <HeaderTag className={className}>{children}</HeaderTag>
  )
}

const Header = styled(HeaderCore)`
  margin: 0;
  font-family: "FreightBook", "serif";
  letter-spacing: 3px;  
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : ''}
`

export default Header;