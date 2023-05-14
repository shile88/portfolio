import { Button, Heading, TextWrapper } from '../../globalStyles';
import {
	ProjectsButton,
	ProjectsButtonWrapper,
	ProjectsCard,
	ProjectsCardCost,
	ProjectsCardFeature,
	ProjectsCardFeatures,
	ProjectsCardInfo,
	ProjectsCardPlan,
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
									<ProjectsCardPlan>{card.title}</ProjectsCardPlan>
									<ProjectsCardCost>{card.price}</ProjectsCardCost>
									<ProjectsCardText>{card.description}</ProjectsCardText>
									<ProjectsCardFeatures>
										{card.features.map((feature, index) => (
											<ProjectsCardFeature key={index}>
												{feature}
											</ProjectsCardFeature>
										))}
									</ProjectsCardFeatures>
									<ProjectsButtonWrapper>
									<ProjectsButton>Check live</ProjectsButton>
									<ProjectsButton>Check code</ProjectsButton>
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