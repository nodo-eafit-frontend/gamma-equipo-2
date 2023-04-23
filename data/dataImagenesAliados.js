const images = require.context('../assets/footer', true, /\.png$/);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const imagenesAliados = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'a',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: 'imagen Transformación humanista',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'imagen Inspiración - Voluntariado',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'a',
	},
	{
		id: 6,
		infoImg: getAllImages()[5],
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 7,
		infoImg: getAllImages()[6],
		alt: 'imagen Transformación humanista',
	},
	{
		id: 8,
		infoImg: getAllImages()[7],
		alt: 'imagen Inspiración - Voluntariado',
	},
	{
		id: 9,
		infoImg: getAllImages()[8],
		alt: 'a',
	},
	{
		id: 10,
		infoImg: getAllImages()[9],
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 11,
		infoImg: getAllImages()[10],
		alt: 'imagen Transformación humanista',
	},
	{
		id: 12,
		infoImg: getAllImages()[11],
		alt: 'imagen Inspiración - Voluntariado',
	},
	{
		id: 13,
		infoImg: getAllImages()[12],
		alt: 'a',
	},
	{
		id: 14,
		infoImg: getAllImages()[13],
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 15,
		infoImg: getAllImages()[14],
		alt: 'imagen Transformación humanista',
	},
	{
		id: 16,
		infoImg: getAllImages()[15],
		alt: 'imagen Inspiración - Voluntariado',
	},
	{
		id: 17,
		infoImg: getAllImages()[16],
		alt: 'a',
	},
	{
		id: 18,
		infoImg: getAllImages()[17],
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 19,
		infoImg: getAllImages()[18],
		alt: 'imagen Transformación humanista',
	},
	{
		id: 20,
		infoImg: getAllImages()[19],
		alt: 'imagen Inspiración - Voluntariado',
	},
];

/* imagenesAliados.map((imagen) => {
	console.log(imagen);
}); */

export default imagenesAliados;
