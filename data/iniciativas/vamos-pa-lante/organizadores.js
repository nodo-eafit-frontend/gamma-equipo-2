const images = require.context(
	'../../../assets/vamos-pa-lante/organizadores',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const organizadores = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: '1',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: '2',
	},
];

export default organizadores;
