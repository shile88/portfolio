import { Column, Row } from '../../globalStyles';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	justify-content: center;
`;

export const FooterRow = styled(Row)`
	flex-wrap: wrap;
	@media screen and (max-width: 820px) {
		> div {
			width: 20%;
		}

		> div:first-child {
			width: 100%;
		}
	}

	@media screen and (max-width: 420px) {
		flex-direction: column;
		align-items: center;

		* {
			width: 100%;
			text-align: center;
		}
	}
`;

export const FooterSocialIcon = styled.a`
	color: #fff;
	font-size: 30px;
	text-decoration: none;
`;

