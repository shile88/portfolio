import { Container, Section } from '../../globalStyles';
import {
    MySkillsColumn,
    MySkillsImageWrapper,
    MySkillsName,
    MySkillsTextWrapper,
    MySkillsTitle,
    MySkillsWrapper
} from './MySkillsStyles';

import { MySkillsData } from '../../data/MySkillsData';
import React from 'react'

const MySkills = () => {
    const initial = {
        y: 40,
        opacity: 0
    };
    const animate = {
        y: 0,
        opacity: 1,
    };

    return (
        <Section smPadding="50px 10px" position="relative" inverse id="skills">
            <Container>
                <MySkillsTextWrapper>
                    <MySkillsTitle>Front-Backend skills:</MySkillsTitle>
                </MySkillsTextWrapper>
                <MySkillsWrapper>
                    {MySkillsData.map((el,index) => (
                        <MySkillsColumn 
                            initial={initial} 
                            animate={animate}
                            transition={{duration: 0.5 + index * 0.1}}
                            key={index}
                        >
                            <MySkillsImageWrapper className={el.imgClass}>
                                {el.icon}                                                                    
                            </MySkillsImageWrapper>
                            <MySkillsName>{el.name}</MySkillsName>                          
                        </MySkillsColumn>                       
                    ))}
                </MySkillsWrapper>
            </Container>
        </Section>
    )
}

export default MySkills