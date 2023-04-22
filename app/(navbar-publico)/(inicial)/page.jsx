import HeaderHome from '@/components/paginaInicial/header';
import InfoFilantropia from '../../../components/paginaInicial/InfoFilantropia';
import NuestrasCausas from '../../../components/paginaInicial/NuestrasCausas';
import InformesGestion from '../../../components/paginaInicial/InformesGestion';
//import Noticias from '../../../components/paginaInicial/Noticias';
import Contacto from '../../../components/paginaInicial/Contacto';
import PreguntasFrecuentes from '../../../components/paginaInicial/PreguntasFrecuentes';

export default function Home({ children }) {
	return (
		<>
			<HeaderHome />
			<main>
				<InfoFilantropia />
				<NuestrasCausas />
				<InformesGestion />
				<Contacto />
				<PreguntasFrecuentes />
			</main>
		</>
	);
}
