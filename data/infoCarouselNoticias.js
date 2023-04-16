const images = require.context('../assets/paginaInicial/causas', true);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//onsole.log(getAllImages());

const infoNoticias = [
	{
		id: 1,
		title:
			'El Centro de Filantropía sigue sumando esfuerzos para apoyar de manera integral a todos los eafitenses',
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
infoNoticias.map((causa) => {
	console.log(causa);
}); */

export default infoNoticias;
