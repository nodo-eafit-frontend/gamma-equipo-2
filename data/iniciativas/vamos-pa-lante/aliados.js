const images = require.context('../../../assets/vamos-pa-lante/aliados', true);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const aliados = [
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
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: '3',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: '4',
	},
];

export default aliados;
