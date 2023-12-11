import { Container, Section } from '../../globalStyles';
import {
    ContentButton,
    ContentColumn,
    ContentRow,
    Heading,
    Img,
    ImgWrapper,
    Subtitle,
    TextWrapper,
    TopLine
} from './ContentStyles';
import React, { useEffect } from 'react';

import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Content = ({
    primary,
	topLine,
	headline,
	description,
	buttonLabel,
	img,
	alt,
	inverse,
	reverse,
}) => {

const initial = { opacity: 0, y: 30 };
const transition = { delay: 0.3, duration: 0.6};
const animation = useAnimation();

const { ref, inView } = useInView({ treshhold: 0.2});

useEffect(()=> {
    if (inView) {
        animation.start({
            opacity: 1,
            y: 0,
        });
    }
}, [inView, animation])

  return (
    <Section inverse={inverse} ref={ref} id="about">
        <Container>
            <ContentRow>
                <ContentColumn>
                    <TextWrapper>
                        <TopLine initial={initial} transition={{delay:0.3, duration:0.6}} animate={animation}>{topLine.tex}</TopLine>
                        <Heading inverse={inverse} initial={initial} transition={{delay:0.5, duration:0.6}} animate={animation}>{headline}</Heading>
                        <Subtitle inverse={inverse} initial={initial} transition={{delay:0.7, duration:0.6}} animate={animation}>{description}</Subtitle>
                        <a  
                            href='./assets/MilosCV.pdf'
                            download="Milos-Ivanis-CV"
                            target="_blank"
                            rel="noopener noreferrer">
                                <ContentButton initial={initial} transition={{delay:1, duration:0.6}} animate={animation} inverse={inverse} primary={primary}>{buttonLabel}</ContentButton>
                        </a> 
                    </TextWrapper>
                </ContentColumn>
                <ContentColumn initial={initial} transition={{delay:0.5, duration:0.6}} animate={animation}>
                    <ImgWrapper>
                        <Img src={img}
								alt={alt}
								whileHover={{ rotate: 2, scale: 1.02 }}
								transition={{ duration: 0.5 }}/>
                    </ImgWrapper>
                </ContentColumn>
            </ContentRow>
        </Container>
    </Section>
  )
}

