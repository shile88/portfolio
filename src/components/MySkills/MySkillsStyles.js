import { motion } from "framer-motion";
import styled from "styled-components";

export const MySkillsTitle = styled.h2`
    text-align: center;
    font-size: clamp(1.3rem, 13vw, 3.1rem);
    line-height:1.06;
    letter-spacing:0.4rem;
    margin:auto;
`
export const MySkillsTextWrapper = styled.div`
    position: relative;
    padding: 0 0 20px;
    margin-bottom: 4rem;
`

export const MySkillsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	margin-top: 4rem;
	grid-gap: 2rem;
	@media screen and (max-width: 1100px) {
		grid-template-columns: repeat(2, 1fr);
		grid-row-gap: 3rem;
	}
	@media screen and (max-width: 568px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const MySkillsColumn = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: #f3f3f3;
	padding: 10px;
	box-shadow: 0 0 32px 8px #d0d0d0;
	border-radius: 20px;
`;

export const MySkillsImageWrapper = styled.div`
	margin-bottom: 1rem;
	border-radius: 50%;
	border: 2px solid #000;
	padding: 30px;
`;
export const MySkillsName = styled.h3`
	font-weight: 600;
	font-size: 1.3rem;
	letter-spacing: 2px;
	@media screen and (max-width: 768px) {
		font-weight: 400;
		font-size: 1rem;
		letter-spacing: 1.3px;
	}
`;
export const MySkillsText = styled.p`
	margin: 1rem 0 auto;
	text-align: center;
	font-size: 0.9rem;
	line-height: 1.73;
	letter-spacing: 0.5px;
	color: #626881;
	@media screen and (max-width: 768px) {
		display: none;
	}
`;