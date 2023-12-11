import { Button } from '../../globalStyles';
import styled from 'styled-components';

export const ProjectsSection = styled.div`
	padding: 120px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #101522;
`;

export const ProjectsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0 auto;
	@media screen and (max-width: 960px) {
		margin: 0 30px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

export const ProjectsContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	> div {
		margin: 0.7rem;
	}
	@media screen and (max-width: 768px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		> div {
			width: 90%;
		}
	}
`;

export const ProjectsCard = styled.div`
	&:hover {
		transform: scale(1.06);
		transition: all 0.3s ease-out;
	}
`;

export const ProjectsCardInfo = styled.div`
	background: #242424;
	box-shadow: 0 6px 20px rgba(56, 125, 255, 0.2);
	width: 280px;
	text-decoration: none;
	border-radius: 4px;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 24px;
	color: #fff;
	margin: auto;
	
	@media screen and (max-width: 768px) {
		width: 90%;
		&:hover {
			transform: none;
		}
	}
`;

export const ProjectsCardTitle = styled.h3`
	margin-bottom: 5px;
	font-size: 2rem;
`;

export const ProjectsCardText = styled.p`
	font-size: 1.1rem;
	margin: 0.4rem 0 1.3rem;
	color: #a9b3c1;
`;

export const ProjectsCardFeatures = styled.ul`
	margin: 16px 0 32px;
	list-style: none;
	display: flex;
	flex-direction: column;
	color: #a9b3c1;
`;

export const ProjectsCardFeature = styled.li`
	margin-bottom: 1rem;
	display: flex;
	font-size: 0.94rem;
	&:before {
		content: '★';
		margin-right: 0.4rem;
	}
`;

export const ProjectsButtonWrapper = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: auto;
`

export const ProjectsButton = styled(Button)`
display: flex;
justify-content: center;
font-size:18px;
margin-right: 5px;

	&:hover {
			color: black;
			background: white;
			transition: background 0.3s ease;
		}

	@media screen and (max-width: 420px) {
		font-size: 12px;
	}
`
