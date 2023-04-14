const images = require.context(
	'../assets/paginaInicial/informesdegestion',
	true
);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

/* console.log(getAllImages()); */

const informesGestion = [
	{
		id: 1,
		infoImg: getAllImages()[0],
		alt: 'informe de gestion 2019',
		nameButton: 'Ver más',
		href: 'https://www.eafit.edu.co/institucional/centro-filantropia/Documents/Informes%20de%20gesti%C3%B3n/informe-de-gestion-filantropia-2019.pdf',
	},
	{
		id: 2,

		infoImg: getAllImages()[1],
		alt: 'informe de gestion 2020',
		nameButton: 'Ver más',
		href: 'https://www.eafit.edu.co/institucional/centro-filantropia/Documents/Informes%20de%20gesti%C3%B3n/informefilantropia-2020.pdf',
	},
	{
		id: 3,

		infoImg: getAllImages()[2],
		alt: 'informe de gestion 2021',
		nameButton: 'Ver más',
		href: 'https://www.eafit.edu.co/institucional/centro-filantropia/Documents/Informes%20de%20gesti%C3%B3n/informe-gestion-filantropia2021.pdf',
	},
	{
		id: 3,
		infoImg: getAllImages()[3],
		alt: 'informe de gestion 2022',
		nameButton: 'Ver más',
		href: 'https://www.eafit.edu.co/institucional/centro-filantropia/Documents/Informes%20de%20gesti%C3%B3n/InformeFilantropia-2022.pdf',
	},
];

/* informesGestion.map((informe) => {
	console.log(informe);
}); */

export default informesGestion;
