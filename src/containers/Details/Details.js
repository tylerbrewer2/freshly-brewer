import React from 'react';

// Components
import FullWidthImage from '../../components/FullWidthImage';
import Header from '../../components/Header';
import Section from '../../components/Section';
import BodyText from '../../components/BodyText';
import Link from '../../components/Link';

// Images
import walk from '../../images/ny-walk-75.jpg';

const Home = () => {
  return (
    <div>
      <FullWidthImage
        src={walk}
        banner
      />
      <Section>
        <Header>Ceremony</Header>
        <BodyText>Date: December 2nd, 2017</BodyText>
        <BodyText>Time: 4:30pm</BodyText>
        <BodyText>Location: Accelerator Space</BodyText>
        <BodyText>Address: 417 Benninghaus Rd, Baltimore, MD 21212</BodyText>
        <Header>Accommodations</Header>
        <BodyText>Attendees can receive a room discount at the <a href="https://www.radisson.com/baltimore-hotel-md-21210/mdbaltim" target="blank">Raddison Hotel - Cross Keys</a> in Baltimore, if you would like the discount please reach out to Morgan or Tyler for the discout code.</BodyText>
      </Section>
      <iframe
        height="400"
        frameBorder="0" style={{width: "100%", border: 0}}
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBQoOtcq_iWSSQz438Bjxs8rJ_FdqUY_dw&q=Accelerator+Space,Baltimore+MD" allowFullScreen
      />
    </div>
  )


}

export default Home;