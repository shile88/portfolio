import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

import React from 'react';

const iconStyle = (Icon) => <Icon />;

export const footerSocialData = [
	{
		name: 'LinkedIn',
		icon: iconStyle(FaLinkedin),
		link: 'https://linkedin.com/in/miloš-ivaniš-link'
	},
	{
		name: 'GitHub',
		icon: iconStyle(FaGithub),
		link: 'https://github.com/shile88'
	},
	
];