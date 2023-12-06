import {FaBootstrap} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaHtml5} from 'react-icons/fa';
import {FaLaravel} from 'react-icons/fa';
import {FaPhp} from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import React from 'react';
import { SiJavascript } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';

const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const MySkillsData = [
	{
		name: 'ReactJS',
		icon: iconStyle(FaReact),
		imgClass: 'three',
		src: './assets/svg/html.png'
	},
	{
		name: 'Html5',
		icon: iconStyle(FaHtml5),
		imgClass: 'one',
		src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
	},
	{
		name: 'CSS/SASS',
		icon: iconStyle(FaCss3Alt),
		imgClass: 'two',
		src: './assets/svg/html.png'
	},
	{
		name: 'Bootstrap',
		icon: iconStyle(FaBootstrap),
		imgClass: 'four',
		src: './assets/svg/html.png'
	},
	{
		name: 'JavaScript',
		icon: iconStyle(SiJavascript),
		imgClass: 'six',
		src: './assets/svg/html.png'
	},
	{
		name: 'PHP',
		icon: iconStyle(FaPhp),
		imgClass: 'seven',
		src: './assets/svg/html.png'
	},
	{
		name: 'Laravel',
		icon: iconStyle(FaLaravel),
		imgClass: 'eight',
		src: './assets/svg/html.png'
	},
	{
		name: 'MySQL',
		icon: iconStyle(SiMysql),
		imgClass: 'nine',
		src: './assets/svg/html.png'
	},
];