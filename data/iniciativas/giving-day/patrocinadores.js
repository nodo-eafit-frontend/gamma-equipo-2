const images = require.context(
	'../../../assets/giving-day/patrocinadores',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const patrocinadores = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'imagen patrocinador 1',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'imagen patrocinador 2',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: 'imagen patrocinador 3',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'imagen patrocinador 4',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'imagen patrocinador 5',
	},
	{
		id: 6,
		infoImg: getAllImages()[5],
		alt: 'imagen patrocinador 6',
	},
	{
		id: 7,
		infoImg: getAllImages()[6],
		alt: 'imagen patrocinador 7',
	},
	{
		id: 8,
		infoImg: getAllImages()[7],
		alt: 'imagen patrocinador 8',
	},
	{
		id: 9,
		infoImg: getAllImages()[8],
		alt: 'imagen patrocinador 9',
	},
	{
		id: 10,
		infoImg: getAllImages()[9],
		alt: 'imagen patrocinador 10',
	},
	{
		id: 11,
		infoImg: getAllImages()[10],
		alt: 'imagen patrocinador 11',
	},
	{
		id: 12,
		infoImg: getAllImages()[11],
		alt: 'imagen patrocinador 12',
	},
	{
		id: 13,
		infoImg: getAllImages()[12],
		alt: 'imagen patrocinador 13',
	},
];
/* 
patrocinadores.map((causa) => {
	console.log(causa);
}); */

export default patrocinadores;
