import {
	FooterSocialIcon,
	FooterWrapper,
} from './MyFooterStyles';
import { Row, Section } from '../../globalStyles';

import React from 'react';
import { footerSocialData } from '../../data/FooterData';

function MyFooter() {
	return (
		<Section padding="1rem 0 1rem 0" id="social">
			<FooterWrapper>									
                    <Row gap="3rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href={social.link}
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}  {social.name}
								</FooterSocialIcon>
							))}
						</Row>								
			</FooterWrapper>
		</Section>
	);
}

export default MyFooter;