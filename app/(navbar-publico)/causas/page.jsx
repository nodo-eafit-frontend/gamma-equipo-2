import HeaderCausas from '@/components/paginaCausas/header';
import CienciaTec from '@/components/paginaCausas/ciencia';
import TransformacionH from '@/components/paginaCausas/transformacion';
import Voluntariado from '@/components/paginaCausas/voluntariado';
import EquidadSocial from '@/components/paginaCausas/equidad';
import Testimonios from './testimonios';
// import {HeaderCausas, CienciaTec, TransformacionH, Voluntariado, EquidadSocial} from '@/components';

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

					<Testimonios/>
					<div className='linea'></div>

				</section>			
			</main>
		</>
	);
}
