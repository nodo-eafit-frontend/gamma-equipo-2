const images = require.context(
	'../../../assets/giving-day/restaurantesyMarcasFueraEafit',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const restaurantesYMarcasFueraEafit = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'imagen restautantes y marcas fuera de EAFIT',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'imagen restautantes y marcas fuera de EAFIT 2',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: 'imagen restautantes y marcas fuera de EAFIT 3',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'imagen restautantes y marcas fuera de EAFIT 4',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'imagen restautantes y marcas fuera de EAFIT 5',
	},
	{
		id: 6,
		infoImg: getAllImages()[5],
		alt: 'imagen restautantes y marcas fuera de EAFIT 6',
	},
];
/* 
restaurantesYMarcasFueraEafit.map((causa) => {
	console.log(causa);
}); */

export default restaurantesYMarcasFueraEafit;
