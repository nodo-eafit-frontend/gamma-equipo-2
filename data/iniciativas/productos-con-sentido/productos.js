const images = require.context(
	'../../../assets/productos-con-sentido/productos',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const productos = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		precio: '89.900',
		alt: 'imagen Equidad Social e inclusión',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		precio: '89.900',
		alt: 'imagen Ciencia, tecnología e innovación',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		precio: '29.000',
		alt: 'imagen Transformación humanista',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		precio: '19.500',
		alt: 'imagen Inspiración - Voluntariado',
	},
];
/* 
productos.map((prod) => {
	console.log(prod);
}); */

export default productos;
