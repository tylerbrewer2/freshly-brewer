import React from 'react';

// Components
import CountdownSection from '../../components/CountdownSection';
import FullWidthImage from '../../components/FullWidthImage';
import PersonalInfo from '../../components/PersonalInfo';

// Images
import nyc from '../../images/nyc-75.jpg';
import bench from '../../images/bench-75.jpg';
import leaves from '../../images/leaves.svg';

const Home = () => {
  return (
    <div>
      <FullWidthImage
        src={nyc}
        banner
      />
      <PersonalInfo />
      <CountdownSection backgroundImage={leaves}/>
    </div>
  )
}

export default Home;