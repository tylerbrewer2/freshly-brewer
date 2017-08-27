import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Style helpers
import Fonts from '../../styles/helpers/Fonts';
import Colors from '../../styles/helpers/Colors';

const LinkCore= ({ children, className, ...rest }) => {
  return (
    <a
      className={className}
      target='_blank'
      {...rest}
    >
      {children}
    </a>
  )
}

LinkCore.propTypes = {
  children: PropTypes.string.isRequired,
}

const Link = styled(LinkCore)`
  text-decoration: none;
  color: ${Colors.richBlack};
  &:hover {
    text-decoration: underline;
    font-family: ${Fonts.bodyBold};
  }
`

export default Link;
