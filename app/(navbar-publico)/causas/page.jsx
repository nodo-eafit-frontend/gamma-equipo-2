import HeaderCausas from '@/components/paginaCausas/header';
import EquidadSocial from './secciones/equidad';
import CienciaTec from './secciones/ciencia';
import TransformacionH from './secciones/transformacion';
import Voluntariado from './secciones/voluntariado';
import Videos from './secciones/testimonios';
import '../../../styles/components/paginaCausas/_bloque.scss';

export default function Causas() {
	return (
		<>
			<HeaderCausas />
			<div className='linea__small'></div>

			<main>
				<section>
					<EquidadSocial/>
					<div className='linea'></div>

					<CienciaTec />
					<div className='linea'></div>

					<TransformacionH />
					<div className='linea'></div>

					<Voluntariado />
					<div className='linea'></div>

					<Videos/>

					{/* <Testimonios/> */}
					<div className='linea'></div>

				</section>			
			</main>
		</>
	);
}
