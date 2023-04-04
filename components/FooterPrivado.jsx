import React from 'react';
import info from '../app/api/footer-micrositio/route';

const FooterMicrositio = () => {
	return (
		<footer>
			<section>
				{info.map((dato) => (
					<article key={dato.id}>
						<h2>{dato.title}</h2>
						<h3>{dato.subtitle}</h3>
						<p>{dato.body}</p>
					</article>
				))}
			</section>
			<section>
				<h2>Ayuda a volar, empieza a donar</h2>
			</section>
		</footer>
	);
};

export default FooterMicrositio;
