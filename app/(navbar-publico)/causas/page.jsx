import HeaderCausas from '@/components/paginaCausas/header';
import { SimpleCard } from '@/components/paginaInicial/Card';
import EquidadSocial from '@/components/paginaCausas/equidad';
import CienciaTec from '@/components/paginaCausas/ciencia';
import TransformacionH from '@/components/paginaCausas/transformacion';
import Voluntariado from '@/components/paginaCausas/voluntariado';
import infoFilantropia from '/data/infoPaginaInicialFilantropia';

export default function Causas() {
	return (
		<>
			<HeaderCausas />

			<EquidadSocial />
			<section>
				<article className='container'>
					<p>
					Brindamos acceso a la Universidad EAFIT a jóvenes que cuentan con un excelente desempeño 
					académico y que no disponen de los recursos económicos para asumir el valor de la matrícula 
					en la Institución. <br/>
					Gracias a tus aportes a nuestro fondo de becas, lograremos que muchos más estudiantes puedan 
					acceder a una ins​​​titución de alta calidad ​que ayud​​ará a que la vida de esto​s jóvenes se transforme
					para siem​​pre ​logrando así una sociedad más equitativa.
					</p>
				</article>
			</section>

			<CienciaTec />

			<TransformacionH />

			<Voluntariado />

			<main>
				<section>
				</section>			
			</main>
		</>
	);
}
