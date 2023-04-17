import HeaderCausas from '@/components/paginaCausas/header';
import CienciaTec from '@/components/paginaCausas/ciencia';
import TransformacionH from '@/components/paginaCausas/transformacion';
import Voluntariado from '@/components/paginaCausas/voluntariado';
import EquidadSocial from '@/components/paginaCausas/equidad';

export default function Causas() {
	return (
		<>
			<HeaderCausas />

			<div className='linea__small'></div>
			<EquidadSocial/>
			<div className='linea'></div>

			<CienciaTec />
			<div className='linea'></div>

			<TransformacionH />
			<div className='linea'></div>

			<Voluntariado />
			<div className='linea'></div>

			<main>
				<section>
				</section>			
			</main>
		</>
	);
}
