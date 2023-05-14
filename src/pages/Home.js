import {AboutMe} from '../data/AboutMeData';
import Carousel from '../components/Carousel/Carousel';
import { Content } from '../components/Content/Content'
import HomePage from '../components/AboutMe/AboutMe'
import MySkills from '../components/MySkills/MySkills'
import React from 'react'

const Home = () => {
  return (
    <>
        <HomePage />
        <MySkills />      
        <Content {...AboutMe}/>
        <Carousel />
    </>
  )
}

export default Home