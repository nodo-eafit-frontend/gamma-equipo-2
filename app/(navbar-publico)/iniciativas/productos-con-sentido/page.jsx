import Image from 'next/image';
import React from 'react';
import banner from '../../../../assets/productos-con-sentido/banner2022.jpg';
import tienda from '../../../../assets/productos-con-sentido/azul_amarelo.png';
import libro from '../../../../assets/productos-con-sentido/5.libro.png';
import libreria from '../../../../assets/productos-con-sentido/acentos.png';
import productos from '@/data/iniciativas/productos-con-sentido/productos';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../../../../styles/pages/_productos-con-sentido.scss';

const ProductosConSentido = () => {
	return (
		<main className="productosConSentido">
			<section className="productosConSentido__banner">
				<Image src={banner} alt="banner productos con sentido" fill />
			</section>

			<section className="productosConSentido__header">
				<h1>¿Ya conoces nuestros Productos con Sentido Eafitense?</h1>
				<p>
					Con la compra de estos productos apoyas al Fondo de Becas de la U.
				</p>
			</section>

			<section className="productosConSentido__principal">
				<h2>Conócelos aquí</h2>
				<div className="productosConSentido__productos">
					{productos.map(({ id, infoImg, precio, alt }) => (
						<article key={id} className="productosConSentido__producto">
							<Image src={infoImg} alt={alt} width={300} height={300} />
							<span>${precio}</span>
						</article>
					))}
				</div>

				<article className="productosConSentido__adquerirProds">
					<h2>Adquiérelos en la tienda</h2>
					<Image src={tienda} alt="imagen tienda" width={300} height={300} />
					<div className="productosConSentido__containerTexto">
						<FaMapMarkerAlt />
						<span>Bloque 16 - Primer piso</span>
					</div>
					<div className="productosConSentido__containerTexto">
						<FaEnvelope />
						<span>tiendaeafit@eafit.edu.co</span>
					</div>
				</article>

				<article className="productosConSentido__adquerirLibros">
					<Image src={libro} alt="libro image" width={300} height={300} />
					<span>$49.000</span>

					<h2>Adquiérelo en la libreria</h2>
					<Image src={libreria} alt="libreria image" width={300} height={300} />
					<div className="productosConSentido__containerTexto">
						<FaMapMarkerAlt />
						<span>Bloque 18 - Primer piso</span>
					</div>
					<div className="productosConSentido__containerTexto">
						<FaEnvelope />
						<span>libreria@eafit.edu.co</span>
					</div>
				</article>
			</section>

			<section className="productosConSentido__contacto">
				<h2>Más información</h2>

				<div>
					<article className="productosConSentido__contactoProds">
						<h3>Para compras de productos con sentido Eafitense:</h3>
						<div>
							<h4>Tienda Azul Amarelo</h4>
							<p>Teléfono: (57) 604 261 9500 Ext. 9546</p>
							<p>tiendaeafit@eafit.edu.co</p>
						</div>

						<div>
							<h4>Librería Acentos</h4>
							<p>Teléfono: (57) 604 261 9500 Ext. 9406 - 9272</p>
							<p>libreria@eafit.edu.co</p>
						</div>
					</article>

					<article className="productosConSentido__contactoLibros">
						<h3>Para donaciones, aportes y alianzas:</h3>
						<div>
							<h4>Filantropía EAFIT</h4>
							<p>Teléfono: (57) 604 261 9500 Ext. 9297</p>
							<p>cfilantropia@eafit.edu.co</p>
						</div>
					</article>
				</div>
			</section>
		</main>
	);
};

export default ProductosConSentido;
