import Image from 'next/image';
import React from 'react';
import banner from '../../../../assets/volemos-juntos/banner.png';
import iconomanos from '../../../../assets/volemos-juntos/iconomanos.png';
import iconodinero from '../../../../assets/volemos-juntos/iconodinero-04.png';
import iconopersona from '../../../../assets/volemos-juntos/iconopersona-05.png';
import { FaEnvelope, FaArrowDown } from 'react-icons/fa';
import '../../../../styles/pages/_volemos-juntos.scss';

const gruposDe = [
	{
		id: 1,
		grupo: '5 personas',
		mensual: '488.500',
		semestral: '2.931.000',
	},
	{
		id: 2,
		grupo: '10 personas',
		mensual: '244.200',
		semestral: '1.465.500',
	},
];

const VolemosJuntos = () => {
	return (
		<main className="volemosJuntos">
			<section className="volemosJuntos__banner">
				<Image src={banner} alt="banner" fill />
			</section>

			<section className="volemosJuntos__description">
				<h2 className="volemosJuntos__title">Volemos Juntos</h2>
				<p>
					Iniciativa de Graduados y Filantropía EAFIT en la que puedes aliarte
					con tus amigos para aportar económicamente un valor mensual o
					semestral durante un tiempo determinado y ayudar a un joven talento
					que no tiene los recursos para estudiar en la U.
				</p>
			</section>

			<section className="volemosJuntos__propuesta">
				<p>Si a partir de hoy y durante los próximos 5 años</p>
				<FaArrowDown />
				<div>
					<p> Te unes en grupos de</p>
				</div>
				<ul className="volemosJuntos__opciones">
					{gruposDe.map(({ id, grupo, mensual, semestral }) => (
						<li key={id} className="volemosJuntos__opcion">
							<p className="volemosJuntos__grupo">{grupo}</p>
							<p>y cada uno dona</p>
							<p>${mensual}</p>
							<span>Mensual</span>
							<p>${semestral}</p>
							<span>Semestral</span>
						</li>
					))}
				</ul>
				<div className="volemosJuntos__unSoloPago">
					<p>
						O financias en un solo pago <span>$146.552.000</span>
					</p>
				</div>
				<FaArrowDown />
				<div className="volemosJuntos__otorgar">
					<p>
						Otorgarías una <span>beca del 100%</span> a un joven talento que por
						situaciones económicas no puede estudiar.
					</p>
				</div>
			</section>

			<section className="volemosJuntos__contacto">
				<p>Si deseas más información o alguna asesoría, escríbenos:</p>
				<div>
					<FaEnvelope />
					<span>cfilantropia@eafit.edu.co</span>
				</div>
			</section>
		</main>
	);
};

export default VolemosJuntos;
