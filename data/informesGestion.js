const images = require.context(
	'../assets/paginaInicial/informesdegestion',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

/* console.log(getAllImages()); */

const informesGestion = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'informe de gestion 2019',
		nameButton: 'Ver más',
		href: '',
	},
	{
		id: 2,

		infoImg: getAllImages()[1],
		alt: 'informe de gestion 2020',
		nameButton: 'Ver más',
		href: '',
	},
	{
		id: 3,

		infoImg: getAllImages()[2],
		alt: 'informe de gestion 2021',
		nameButton: 'Ver más',
		href: '',
	},
];

/* informesGestion.map((informe) => {
	console.log(informe);
}); */

export default informesGestion;
