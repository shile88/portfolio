import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import React from 'react';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
	},
	{
		name: 'GitHub',
		icon: iconStyle(FaGithub),
	},
	
];