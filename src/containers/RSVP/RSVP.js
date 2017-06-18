import React from 'react';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import RSVPForm from '../../components/RSVPForm';

// Images
import fieldbw from '../../images/fieldbw.png'

const RSVP = () => {
  return (
    <section>
      <FullWidthImage
        src={fieldbw}
        banner
      />
      <RSVPForm />
    </section>
  );
}

export default RSVP;
