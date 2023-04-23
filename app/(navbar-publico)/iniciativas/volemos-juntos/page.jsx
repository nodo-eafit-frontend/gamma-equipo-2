import Image from 'next/image';
import React from 'react';
import banner from '../../../../assets/volemos-juntos/banner.png';
import iconomanos from '../../../../assets/volemos-juntos/iconomanos.png';
import iconodinero from '../../../../assets/volemos-juntos/iconodinero-04.png';
import iconopersona from '../../../../assets/volemos-juntos/iconopersona-05.png';
import { FaEnvelope } from 'react-icons/fa';

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
				<Image src={banner} alt="banner" width={300} height={300} />
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
				<div>
					<Image src={iconomanos} alt="icono manos" width={100} height={100} />
					<p> Te unes en grupos de</p>
				</div>
				<ul>
					{gruposDe.map(({ id, grupos, mensual, semestral }) => (
						<li key={id}>
							<p>{grupos}</p>
							<p>y cada uno dona</p>
							<p>${mensual}</p>
							<p>Mensual</p>
							<p>${semestral}</p>
							<p>Semestral</p>
						</li>
					))}
				</ul>
				<div>
					<Image src={iconodinero} alt="icono manos" width={100} height={100} />
					<p>
						O financias en un solo pago <span>$146.552.000</span>
					</p>
				</div>

				<div>
					<Image
						src={iconopersona}
						alt="icono manos"
						width={250}
						height={250}
					/>
					<p>
						Otorgarías una <span>beca del 100%</span> a un joven talento que por
						situaciones económicas no puede estudiar.
					</p>
				</div>
			</section>

			<section className="volemosJuntos__contacto">
				<p>Si deseas más información o alguna asesoría, escríbenos:</p>
				<p>
					<FaEnvelope /> cfilantropia@eafit.edu.co
				</p>
			</section>
		</main>
	);
};

export default VolemosJuntos;
