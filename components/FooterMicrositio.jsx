import React from 'react';
import info from '../app/api/footer-micrositio/route';
import Link from 'next/link';


const FooterMicrositio = () => {
	return (
		<footer className="footer">
			<section className="footer__container-info">
				{info.map((dato) => (
					<article className="footer__info" key={dato.id}>
						<h2 className="footer__info-title">{dato.title}</h2>
						<h3 className="footer__info-subtitle">{dato.subtitle}</h3>
						{dato.id == 0 ? (
							<Link
								href={`https://${dato.body}`}
								target="_blank"
								className="footer__info-body"
							>
								{dato.body}
							</Link>
						) : (
							<p className="footer__info-body">{dato.body}</p>
						)}
					</article>
				))}
			</section>
			<section className="footer__container-frase">
				<h2 className="footer__frase">Ayuda a volar, empieza a donar</h2>
			</section>
		</footer>
	);
};

export default FooterMicrositio;
