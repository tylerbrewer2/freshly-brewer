import React from 'react';

import Section from '../Section';
import Header from '../Header';
import LinkButton from '../LinkButton';

const RSVPSection = () => {
  return(
    <Section centered>
      <Header tag="h1">
        RSVP to our wedding in Baltimore, Maryland on <br />
        December 2nd, 2017.
      </Header>
      <LinkButton to="/rsvp">CONTACT US</LinkButton>
    </Section>
  )
}

export default RSVPSection;