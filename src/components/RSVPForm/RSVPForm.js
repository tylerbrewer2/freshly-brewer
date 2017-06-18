import React from 'react';

// Components
import Form from '../Form';
import TextInputGroup from '../TextInputGroup';
import TextAreaGroup from '../TextAreaGroup';

// Utilities
import AttendeeCreator from '../../utilities/AttendeeCreator';


export default class RSVPForm extends React.Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    attending: '',
    extraAttendees: '',
    songSuggestion: '',
    message: '',
    response: undefined,
  }

  onChange = (e) => {
    const state = Object.assign({}, this.state)
    state[e.currentTarget.name] = e.currentTarget.value
    this.setState(prev => ({
      ...prev,
      ...state,
    }));
  }

  onSubmit = (e) => {
    e.preventDefault();
    const state = Object.assign({}, this.state)
    delete state.response
    const attendeeCreator = new AttendeeCreator(state);
    const response = attendeeCreator.create({ successMessage: 'RSVP successfully sent.' });
    this.setState(prev => ({
      ...prev,
      response,
    }));
  }

  render() {
    return (
      <section>
        <Form
          onSubmit={this.onSubmit}
          title="RSVP for December 2nd, 2017"
          width={6}
          requestResponse={this.state.response}
        >
          <TextInputGroup
            labelText="Email*"
            identifier="email"
            value={this.state.email}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="First Name*"
            identifier="firstName"
            value={this.state.firstName}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="Last Name*"
            identifier="lastName"
            value={this.state.lastName}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="Will you be attending?*"
            identifier="attending"
            value={this.state.attending}
            onChange={this.onChange}
            required
          />

          <TextInputGroup
            labelText="Who else is coming with you?"
            identifier="extraAttendees"
            value={this.state.extraAttendees}
            onChange={this.onChange}
          />

          <TextInputGroup
            labelText="Do you have any song suggestions?"
            identifier="songSuggestion"
            value={this.state.songSuggestion}
            onChange={this.onChange}
          />

          <TextAreaGroup
            labelText="Are you as excited as we are? Let us know!"
            identifier="message"
            value={this.state.message}
            onChange={this.onChange}
          />
        </Form>
      </section>
    )
  }
};

        // <TextAreaGroup
        //   labelText="Are you as excited as we are? Let us know!"
        //   identifier="message"
        //   value={this.state.message}
        //   onChange={this.onChange}
        // />