import HeaderHome from '@/components/paginaInicial/header';
import InfoFilantropia from './InfoFilantropia';
import NuestrasCausas from './NuestrasCausas';
import InformesGestion from './InformesGestion';
import Noticias from './Noticias';
import PreguntasFrecuentes from './PreguntasFrecuentes';
import Contacto from './Contacto';

export default function Home({ children }) {
	return (
		<>
			<HeaderHome />
			<main>
				<InfoFilantropia />
				<NuestrasCausas />
				<InformesGestion />
				<Noticias />
				<Contacto />
				<PreguntasFrecuentes />
			</main>
		</>
	);
}
