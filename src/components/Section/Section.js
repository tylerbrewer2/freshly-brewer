import React from 'react';
import styled from 'styled-components';

const SectionCore = ({className, children }) => {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

const Section = styled(SectionCore)`
  padding: 120px 0;
  text-align: ${props => props.centered ? 'center' : ''};
  max-width: ${props => props.full ? '' : '90%'};
  margin: 0 auto;
`

export default Section;