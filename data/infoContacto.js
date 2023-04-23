const images = require.context('../assets/paginaInicial/contacto', true);

export const getAllImages = () => {
	const keys = images.keys();
	const urls = keys.map((key) => images(key).default);
	return urls;
};

//console.log(getAllImages());

const infoContacto = [
	{
		id: 1,
		name: 'Maria Clara Ceballos Arango',
		infoImg: getAllImages()[0],
		alt: 'Maria Clara Ceballos Arango foto',
		info: ['Jefa de Filantropía EAFIT', 'Tel: (57) 604 261 9500 ext. 8857'],
		email: ['mceball4@eafit.edu.co', 'cfilantropia@eafit.edu.co'],
	},
	{
		id: 2,
		name: 'María Cristina Montoya Vélez',
		infoImg: getAllImages()[1],
		alt: 'María Cristina Montoya Vélez foto',
		info: ['Coordinadora Administrativa'],
		email: ['mmonto41@eafit.edu.co', 'cfilantropia@eafit.edu.co'],
	},
	{
		id: 3,
		name: 'Luz Adriana Yepes Arias',
		infoImg: getAllImages()[2],
		alt: 'Luz Adriana Yepes Arias foto',
		info: ['Analista de Información'],
		email: ['layepesa@eafit.edu.co'],
	},
	{
		id: 4,
		name: 'Lizyenny Osorio Álvarez',
		infoImg: getAllImages()[3],
		alt: 'Lizyenny Osorio Álvarez foto',
		info: ['Analista de Voluntariado'],
		email: ['losorioa@eafit.edu.co'],
	},
	{
		id: 5,
		name: 'Marcela Builes Toro',
		infoImg: getAllImages()[4],
		alt: 'Marcela Builes Toro foto',
		info: ['Analista de Comunicaciones'],
		email: ['mbuiles10@eafit.edu.co', 'filantropiacomunica@eafit.edu.co'],
	},
	{
		id: 6,
		name: 'Nury Andreasepúlveda Muñoz',
		infoImg: getAllImages()[5],
		alt: 'Nury Andreasepúlveda Muñoz foto',
		info: ['Auxiliar Administrativa', 'Tel: (57) 604 261 9500, ext. 9297'],
		email: ['nsepulv2@eafit.edu.co'],
	},
];
/* 
infoCausas.map((causa) => {
	console.log(causa);
}); */

export default infoContacto;
