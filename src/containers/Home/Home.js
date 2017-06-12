import React from 'react';

import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';
import RSVPSection from '../../components/RSVPSection';
import Splash from '../../components/Splash';

import field from '../../images/field.jpg';
import dc from '../../images/dc.jpg';

const Home = ({}) => {
  return (
    <div>
      <FullWidthImage
        src={field}
        banner
      />
      <PersonalInfo />
      <CountdownSection backgroundImage={dc}/>
      <RSVPSection />
    </div>
  )
}

export default Home;