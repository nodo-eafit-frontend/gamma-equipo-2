import ArticuloCheque from '@/components/como-donar/ArticuloCheque';
import ArticuloConvenioBancolombia from '@/components/como-donar/ArticuloConvenioBancolombia';
import ArticuloDeduccion from '@/components/como-donar/ArticuloDeduccion';
import ArticuloDonacionEnLinea from '@/components/como-donar/ArticuloDonacionEnLinea';
import ArticuloEspecie from '@/components/como-donar/ArticuloEspecie';
import ArticuloPersonalmente from '@/components/como-donar/ArticuloPersonalmente';
import ArticuloTiempoTalento from '@/components/como-donar/ArticuloTiempoTalento';
import ArticuloTransferencia from '@/components/como-donar/ArticuloTransferencia';
import HeaderDonate from '@/components/como-donar/HeaderDonate';
import '../../../styles/components/como-donar/comoDonar.scss';

const DonateContainer = () => {
	return (
		<div className="comoDonar">
			<HeaderDonate />
			<main className="content">
				<section className="content-como-donar">
					<ArticuloDonacionEnLinea />
					<hr />
					<ArticuloConvenioBancolombia />
					<hr />
					<ArticuloTransferencia />
					<hr />
					<ArticuloCheque />
					<hr />
					<ArticuloPersonalmente />
					<hr />
					<ArticuloDeduccion />
					<hr />
					<ArticuloTiempoTalento />
					<hr />
					<ArticuloEspecie />
				</section>
			</main>
		</div>
	);
};

export default DonateContainer;
