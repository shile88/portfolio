import { Heading, TextWrapper } from '../../globalStyles';
import {
	ProjectsButton,
	ProjectsButtonWrapper,
	ProjectsCard,
	ProjectsCardFeature,
	ProjectsCardFeatures,
	ProjectsCardInfo,
	ProjectsCardTitle,
	ProjectsCardText,
	ProjectsContainer,
	ProjectsSection,
	ProjectsWrapper
} from './ProjectsStyles';

import { IconContext } from 'react-icons/lib';
import React from 'react';
import { projectsData } from '../../data/ProjectsData';

function Pricing() {
	return (
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<ProjectsSection id="pricing">
				<ProjectsWrapper>
					<Heading>More details about projects</Heading>

					<TextWrapper
						mb="1.4rem"
						weight="600"
						size="1.1rem"
						color="white"
						align="center"
					>
						Check it live or on github
					</TextWrapper>
					<ProjectsContainer>
						{projectsData.map((card, index) => (
							<ProjectsCard key={index}>
								<ProjectsCardInfo>
									<ProjectsCardTitle>{card.title}</ProjectsCardTitle>
									<ProjectsCardText>{card.description}</ProjectsCardText>
									<ProjectsCardFeatures>
										{card.features.map((feature, index) => (
											<ProjectsCardFeature key={index}>
												{feature}
											</ProjectsCardFeature>
										))}
									</ProjectsCardFeatures>
									<ProjectsButtonWrapper>
									<ProjectsButton onClick={()=> window.open(card.url, '_blank')}>Check live</ProjectsButton>
									<ProjectsButton onClick={()=> window.open(card.link, '_blank')}>Check code</ProjectsButton>
									</ProjectsButtonWrapper>						
								</ProjectsCardInfo>
							</ProjectsCard>
						))}
					</ProjectsContainer>
				</ProjectsWrapper>
			</ProjectsSection>
		</IconContext.Provider>
	);
}
export default Pricing;