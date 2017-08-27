import React from 'react';

// Components
import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';

// Images
import baldSpotCity from '../../images/baldSpotCity.jpg';
import leaves from '../../images/leaves.svg';

const Home = () => {
  return (
    <div>
      <FullWidthImage
        src={baldSpotCity}
        banner
      />
      <PersonalInfo />
      <CountdownSection backgroundImage={leaves}/>
    </div>
  )
}

export default Home;