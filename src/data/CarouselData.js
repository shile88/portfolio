export const data = [
	{
		title: 'Hangman',
		description:
			'Hangman is a simple word guessing game(hidden word is in English).',
		image: './assets/hangman.jpg',
	},
	{
		title: 'Minesweeper',
		description: 'Old and familiar game to all of us. Can you beat it ??',
		image: './assets/mine.png',
	},
	{
		title: 'Imdb search app',
		description: 'Check info about your favorite movie.',
		image: './assets/imdb.png',
	},
	{
		title: 'Video browser',
		description: 'App for browsing You tube videos',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Video streamer',
		description: 'Stream your favorite videos',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
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