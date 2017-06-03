import React from 'react';

import AttendeeCreator from '../../utilities/AttendeeCreator';

const RSVP = () => {
  function onClick() {
    const attendee = {
      firstName: 'Tyler',
      lastName: 'Brewer',
      attending: true,
      message: "I'm excited to be attending!"
    }

    const attendeeCreator = new AttendeeCreator(attendee);
    attendeeCreator.create
  }

  return (
    <button onClick={onClick}>Test firebase</button>
  );
}

export default RSVP;
