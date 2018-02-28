import React from 'react';

import LogoFooterImg from '../../img/logo-footer.png';
import UpArrowimg from '../../img/flecha3.png';

const Footer = () => (
	<footer className="page-footer font-small stylish-color-dark pt-4 mt-4 bg-warning text-white">

		<div className="container text-center text-md-left">

			<div className="row text-center text-md-left mt-3 pb-3">

				<div className="col-md-4 mx-auto mt-3">
					<img src={LogoFooterImg} alt="imagen de logo"/>
					<p className='p-2'>© Editado por Laboratoria
                            Av. José Pardo #601 Lima 1 Perú
                    Copyright © Laboratoria.la
                    Todos los derechos reservados.
					</p>
					<hr className="w-100 clearfix d-md-none bg-light"/>
					<h4 className='d-md-none font-weight-bold text-center'>Ver Más</h4>
				</div>
				<div className="col-md-4 mt-3 d-none d-md-block">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">DIRECTOR GENERAL:</a>
							<small className='p-0'>Francisco Miró Quesada Cantuarias</small>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">DIRECTOR PERIODÍSTICO:</a>
							<small>Fernando Berckemeyer Olaechea</small>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">SUSCRIPCIONES:</a>
							<small>suscriptores@comercio.com.pe</small>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">PUBLICIDAD ONLINE:</a>
							<small>fonoavisos@comercio.com.pe</small>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">CLUB EL COMERCIO:</a>
							<small>clubelcomercio@comercio.com.pe</small>
							<small>Compromiso de Autorregulación Comercial</small>
						</li>
					</ul>
				</div>
				<div className="col-md-4 mt-3 d-none d-md-block">
					<ul className="nav flex-column">
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">TÉRMINOS Y CONDICIONES DE USO</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">TRABAJA CON NOSOTROS</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">LIBRO DE RECLAMACIONES</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">SEDES PRINCIPALES</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white p-0" href="#">POLÍTICAS DE PRIVACIDAD</a>
						</li>
					</ul>
					<a href='#loUltimo' id='btn-up' className="btn btn-dark rounded-circle d-flex flex-column align-items-center position-absolute">
						<img src={UpArrowimg} alt="flecha hacia arriba"/>SUBIR
					</a>
				</div>

			</div>
		</div>

	</footer>
);

export default Footer;