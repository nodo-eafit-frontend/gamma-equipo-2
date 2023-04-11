import HeaderHome from '@/components/paginaInicial/header';
import InfoFilantropia from './InfoFilantropia';
import NuestrasCausas from './NuestrasCausas';
import InformesGestion from './InformesGestion';
import Noticias from './Noticias';

export default function Home({ children }) {
	return (
		<>
			<HeaderHome />
			<main>
				<InfoFilantropia />
				<NuestrasCausas />
				<InformesGestion />
				<Noticias />
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
					recusandae, animi accusantium corporis itaque doloribus provident
					omnis illum similique pariatur et harum vel eos qui cumque veritatis
					tenetur quam voluptatum. Quis eaque recusandae adipisci, aut ex qui
					provident accusantium consectetur omnis ducimus nesciunt esse animi
					nostrum eum quae culpa. Architecto officia sed rerum consequuntur
					libero nostrum aliquid culpa velit ipsum. Necessitatibus quasi tempore
					quod suscipit, voluptatibus fuga ea odit dolore, aperiam qui nihil
					assumenda facere distinctio. Fugit, quis. Doloribus repellendus
					dolorem non porro iste numquam architecto saepe qui iure sint. Optio
					officiis quaerat nulla facilis molestias, doloribus fugit voluptate
				</p>
			</main>
		</>
	);
}
