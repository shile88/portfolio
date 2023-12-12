export const projectsData = [
	{
		title: 'Rent a car',
		description: 'Final project for Amplitudo Course - React',
		features: ['ReactJS', 'Axios with React query', 'Ant design', 'React Hook Form', 'Yup validation', 'Translation with React i18next'],
		link: 'https://github.com/shile88/front-rent-car-amplitudo.git',
		image: './assets/logo-car.jpg',
		url: 'https://rentacar.milosivanis.com'
	},
	{
		title: 'Minesweeper',
		description: 'Old game but can you beat is',
		features: [
			'HTML', 'Pure CSS', 'Javascript', 'ReactJS'
		],
		link: 'https://github.com/shile88/minesweeper.git',
		image: './assets/mine.png',
		url: 'https://minesweeper.milosivanis.com'
	},
	{
		title: 'IMDB search',
		description: 'Check info about your favorite movie',
		features: [
			'HTML', 'CSS - Tailwind', 'Javascript', 'ReactJS', 'React Redux','Axios for API fetch'
		],
		link: 'https://github.com/shile88/imdb-search-app.git',
		image: './assets/imdb.png',
		url: 'https://imdbsearch.milosivanis.com'
	},

	{
		title: 'Video browser',
		description: 'Browsing You tube videos',
		features: ['HTML', 'CSS - Tailwind', 'Javascript', 'ReactJS','Axios for API fetch', 'Google OAuth'],
		link: 'https://github.com/shile88/video-browser.git',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
		url: 'https://videobrowser.milosivanis.com'
	},
	{
		title: 'Mastermind',
		description: 'Test your skills and find solution',
		features: ['HTML', 'Pure CSS', 'Javascript', 'ReactJS'],
		link: 'https://github.com/shile88/mastermind.git',
		image: './assets/Mastermind.jpg',
		url: 'https://mastermind.milosivanis.com'
	},
	{
		title: 'Hangman',
		description: 'Can you find correct word?',
		features: ['HTML', 'Pure CSS', 'Javascript', 'ReactJS'],
		link: 'https://github.com/shile88/hangman.git',
		image: './assets/hangman.jpg',
		url: 'https://hangman.milosivanis.com'
	},
	{
		title: 'Rent a car',
		description: 'Final project for Amplitudo Course - Laravel',
		features: ['API endpoints for users, car, rentals', 'Emails using queue for rent confirmation', 'Make reports in Excel', 'MySQL for database'],
		link: 'https://github.com/shile88/rent-a-car-laravel.git',
		image: './assets/laravel.png',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};