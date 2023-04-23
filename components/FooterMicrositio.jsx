import React from 'react';
import info from '../data/infoFooterMicrositio';
import Link from 'next/link';
import '../styles/components/_footer-micrositio.scss';

const FooterMicrositio = () => {
	return (
		<footer className="footerMicrositio">
			<section className="footerMicrositio__container-info">
				{info.map((dato) => (
					<article className="footerMicrositio__info" key={dato.id}>
						<h2 className="footerMicrositio__info-title">{dato.title}</h2>
						<h3 className="footerMicrositio__info-subtitle">{dato.subtitle}</h3>
						{dato.id == 0 ? (
							<Link
								href={`https://${dato.body}`}
								target="_blank"
								className="footerMicrositio__info-body"
							>
								{dato.body}
							</Link>
						) : (
							<p className="footerMicrositio__info-body">{dato.body}</p>
						)}
					</article>
				))}
			</section>
			<section className="footerMicrositio__container-frase">
				<h2 className="footerMicrositio__frase">
					Ayuda a volar, empieza a donar
				</h2>
			</section>
		</footer>
	);
};

export default FooterMicrositio;
