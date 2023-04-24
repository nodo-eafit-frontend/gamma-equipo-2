const images = require.context('../../assets/aliadosvoluntariado', true, /\.png$/);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

const imagesAlVoluntariado = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'Alcaldia de Medellin',
	},
	{
		id: 2,
		infoImg: getAllImages()[1],
		alt: 'Alianza 4U',
	},
	{
		id: 3,
		infoImg: getAllImages()[2],
		alt: 'Consejo del Voluntariado',
	},
	{
		id: 4,
		infoImg: getAllImages()[3],
		alt: 'Antioquia presente',
	},
	{
		id: 5,
		infoImg: getAllImages()[4],
		alt: 'Fundacion Angel de la Guarda',
	},
	{
		id: 6,
		infoImg: getAllImages()[5],
		alt: 'Juguemos en el bosque',
	},
	{
		id: 7,
		infoImg: getAllImages()[6],
		alt: 'Marina Foundation',
	},
	{
		id: 8,
		infoImg: getAllImages()[7],
		alt: 'Funndacion La Visitacion',
	},
	{
		id: 9,
		infoImg: getAllImages()[8],
		alt: 'Gobernacion de Anttioquia',
	},
	{
		id: 10,
		infoImg: getAllImages()[9],
		alt: 'Mesa de Voluntariado Universitario',
	},
	{
		id: 11,
		infoImg: getAllImages()[10],
		alt: 'Superheroes por Colombia',
	},
	{
		id: 12,
		infoImg: getAllImages()[11],
		alt: 'Pascual Bravo',
	},
];

export default imagesAlVoluntariado;
