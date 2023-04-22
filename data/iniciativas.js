const images = require.context('../assets/iniciativas', true);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const iniciativas = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'Giving day image',
		nameButton: '¡Conoce más!',
		href: '/iniciativas/giving-day',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'Vincúlate a Creadores de principios image',
		nameButton: '¡Vincúlate!',
		href: '/iniciativas/creadores-de-principios',
	},
	{
		id: 3,

		infoImg: getAllImages()[2],
		alt: "Vamos pa' lante image",
		nameButton: '¡Ve más!',
		href: '/iniciativas/vamos-pa-lante',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'Productos con Sentido Eafitense image',
		nameButton: '¡Apoya!',
		href: '/iniciativas/productos-con-sentido',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'Volemos juntos image',
		nameButton: '¡Aporta!',
		href: '/iniciativas/volemos-juntos',
	},
];

/* informesGestion.map((informe) => {
	console.log(informe);
}); */

export default iniciativas;
