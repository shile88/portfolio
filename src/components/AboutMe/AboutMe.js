import { AboutMeButton, AboutMeSection, AboutMeText, AboutMeVideo, ButtonWrapper } from './AboutMeStyles';
import { Button, Container, MainHeading } from '../../globalStyles';
import React from 'react';

const HomePage = () => {

    const scrollTo = (id) => {
        const element = document.getElementById(id);

        element.scrollIntoView({
            behavior: 'smooth',
        })
    }
  return (
    <AboutMeSection>
        <AboutMeVideo src="./assets/hero.mp4" autoPlay loop muted></AboutMeVideo>
        <Container>
            <MainHeading>Hi, I'm Miloš</MainHeading>
            <AboutMeText>
            Committed and hardworking individual currently on path to become full stack web developer.
            </AboutMeText>
            <ButtonWrapper>             
                    <Button onClick={()=>scrollTo('skills')}>Skills</Button>                               
                    <AboutMeButton onClick={()=>scrollTo('about')}>About</AboutMeButton>
                    <Button onClick={()=>scrollTo('projects')}>Projects</Button>                                  
            </ButtonWrapper>
        </Container>
    </AboutMeSection>
  )
}

export default HomePage