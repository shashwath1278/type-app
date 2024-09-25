import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Camp from '../../components/Camp';
import Texthome from '../../components/Texthome';
import Dcard1 from '../../Dcard1';
import Dcard2 from '../../Dcard2';
import Dcard3 from '../../Dcard3';
import Dcard4 from '../../../Dcard4';
import Dbanner from '../../components/Dbanner';

const Home = () => {
  const { isDarkMode } = useOutletContext();

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <div className='newd'>
      <br /></div>
      <Camp />
      <div className='newd'>
      <br /></div>
      <div className={` flex items-center newd`}>
        <Dcard1 />
        <Dcard2 />
        <Dcard3 />
        <Dcard4 />
      </div>
      <div className='newd'>
      <br /></div>
      <Dbanner />
      <div className='newd'>
      <br />
      <br />
      </div>
    </div>
  );
};

export default Home;
