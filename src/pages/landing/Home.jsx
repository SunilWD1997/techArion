import React from 'react'
import Heroimage from '../../components/heroImage/Heroimage'
import SubHeroSection from '../../components/subheroSection/SubHeroSection';
import './home.css';

const Home = () => {
  return (
   <div className="home">
    <Heroimage />
    <SubHeroSection/>
   </div>
  )
}

export default Home