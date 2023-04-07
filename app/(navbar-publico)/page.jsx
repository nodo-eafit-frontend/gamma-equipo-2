import HeaderHome from '@/components/paginaInicial/header';
import { SimpleCard } from '@/components/paginaInicial/Card';
import NuestrasCausas from '@/components/paginaInicial/NuestrasCausas';
import infoFilantropia from '/data/infoPaginaInicialFilantropia';

export default function Home() {
	return (
		<>
			<HeaderHome />
			<main>
				<section
					className="info-filantropia"
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						justifyContent: 'center',
						alignItems: 'center',
						gap: '25px',
						padding: '20px',
					}}
				>
					{infoFilantropia.map(({ id, title, description }) => (
						<SimpleCard key={id} title={title} description={description} />
					))}
				</section>
				<NuestrasCausas />
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
					excepturi voluptas quas vero, quis asperiores commodi quod hic eum
					aliquid explicabo quisquam ea aliquam quae neque ratione fugiat iusto.
					Quae. Incidunt non culpa beatae odit, modi fuga mollitia maiores
					voluptates deserunt. Minima, sunt dolorem? Hic eius, suscipit totam
					dolor qui odit mollitia illum dolorem, temporibus et voluptate, autem
					doloribus. Aut! Eligendi animi, similique aperiam optio doloremque
					aliquam beatae sint reprehenderit, modi praesentium ex repudiandae
					assumenda nulla magnam aspernatur. Fuga molestias obcaecati sapiente
					voluptate quod, debitis sequi odit nostrum ut aperiam. Enim, rerum
					consequuntur omnis excepturi voluptate consequatur? Fuga distinctio
					natus placeat. Ut fugit, at quo ea error ratione natus distinctio vel
					unde, facere minus fuga repudiandae, quisquam blanditiis nisi
					molestias! Inventore non ut pariatur iure repudiandae magnam quasi
					reiciendis. Dolorum ducimus quos voluptate reiciendis quaerat nostrum
					eos, accusantium velit consequuntur debitis doloremque neque modi
					aliquid ad voluptas deserunt unde quam! Doloribus omnis eaque esse
					reprehenderit quasi nihil laborum odio ratione? Facilis perspiciatis
					natus quae dolore exercitationem deserunt delectus voluptatibus nemo
					asperiores laboriosam quos doloremque incidunt, sed, fugiat aperiam,
					quis nam. Ab, doloremque asperiores vel consequuntur in sequi fugiat
					soluta, est ipsam maiores ut blanditiis officia ex rerum esse! Tenetur
					natus nisi sapiente a accusantium tempore sit quam obcaecati iusto
					dolorem?
				</p>
			</main>
		</>
	);
}
