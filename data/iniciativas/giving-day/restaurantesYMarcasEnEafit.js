const images = require.context(
	'../../../assets/giving-day/restaurantesYMarcasEnEafit',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const restaurantesYMarcasEnEafit = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'imagen de restaurante y marcas en EAFIT',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'imagen de restaurante y marcas en EAFIT 2',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: 'imagen de restaurante y marcas en EAFIT 3',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'imagen de restaurante y marcas en EAFIT 4',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'imagen de restaurante y marcas en EAFIT 5',
	},
	{
		id: 6,
		infoImg: getAllImages()[5],
		alt: 'imagen de restaurante y marcas en EAFIT 6',
	},
	{
		id: 7,
		infoImg: getAllImages()[6],
		alt: 'imagen de restaurante y marcas en EAFIT 7',
	},
	{
		id: 8,
		infoImg: getAllImages()[7],
		alt: 'imagen de restaurante y marcas en EAFIT 8',
	},
	{
		id: 9,
		infoImg: getAllImages()[8],
		alt: 'imagen de restaurante y marcas en EAFIT 9',
	},
];
/* 
restaurantesYMarcasEnEafit.map((causa) => {
	console.log(causa);
}); */

export default restaurantesYMarcasEnEafit;
