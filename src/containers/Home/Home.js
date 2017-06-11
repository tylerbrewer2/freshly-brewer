import React from 'react';

import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';
import RSVPSection from '../../components/RSVPSection';
import Splash from '../../components/Splash';

import chair from '../../images/chair.jpg'
import dc from '../../images/dc.jpg';

const Home = ({}) => {
  return (
    <div>
      <FullWidthImage src={chair}/>
      <PersonalInfo />
      <CountdownSection backgroundImage={dc}/>
      <RSVPSection />
    </div>
  )
}

export default Home;