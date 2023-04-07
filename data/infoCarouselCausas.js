const images = require.context('../assets/paginaInicial/causas', true);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//onsole.log(getAllImages());

const infoCausas = [
	{
		id: 1,
		title: 'Equidad Social e inclusión',
		infoImg: getAllImages()[0],
		alt: 'imagen Equidad Social e inclusión',
		nameButton: 'Ver más',
		href: '',
	},
	{
		id: 2,
		title: 'Ciencia, tecnología e innovación',
		infoImg: getAllImages()[1],
		alt: 'imagen Ciencia, tecnología e innovación',
		nameButton: 'Ver más',
		href: '',
	},
	{
		id: 3,
		title: 'Transformación humanista',
		infoImg: getAllImages()[2],
		alt: 'imagen Transformación humanista',
		nameButton: 'Ver más',
		href: '',
	},
	{
		id: 4,
		title: 'Inspiración - Voluntariado',
		infoImg: getAllImages()[3],
		alt: 'imagen Inspiración - Voluntariado',
		nameButton: 'Ver más',
		href: '',
	},
];
/* 
infoCausas.map((causa) => {
	console.log(causa);
}); */

export default infoCausas;
