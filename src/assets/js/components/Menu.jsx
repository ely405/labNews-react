import React from 'react';

import logo from '../../img/logoicon.png';
import menu from '../../img/menu.png';
import search from '../../img/search.png';
import fb from '../../img/fb.png';
import tw from '../../img/tw.png';
import linkedin from '../../img/in.png';
import cloud from '../../img/cloud.png';

const Menu = () => (
	<nav className="navbar navbar-expand-md navbar-light bg-light fixed-top flex-md-column d-md-flex px-0 pb-0 justify-content-around ">
		<div className='d-md-flex justify-content-between col-12 d-none d-md-block'>
			<div>
				<img src={menu} alt="Imagen de menú"/>
				<span className='text-uppercase'>sections</span>
				<img className='ml-4' src={search} alt="Icono de buscar"/>
				<span className='text-uppercase'>search</span>
			</div>
			<div>
				<img className='m-2' src={fb} alt="Logo de Facebook"/>
				<img className='m-2' src={tw} alt="Logo de Twitter"/>
				<img className='m-2' src={linkedin} alt="Logo de Linkedin"/>
			</div>
		</div>
		<hr className='w-100 bg-dark d-none d-md-block' />
		<a className="navbar-brand col-6 text-center" href="#"><img className='img-fluid' src={logo} alt="Logo de Laboratoria"/></a>
		<div className='d-none d-md-block pb-3'>
			<span className='pr-3'>Lunes, Junio 12 del 2017</span>
			<img src={cloud} alt="Icono de nuve"/>
			<span>22°</span>
		</div>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleMenu" aria-controls="navbarToggleMenu" aria-expanded="false" aria-label="Toggle navigation">
			<img src={menu} alt="Imagen de menú"/>
		</button>
		<div className="collapse navbar-collapse w-100 bg-md-orange" id="navbarToggleMenu">
			<ul className="navbar-nav mr-auto mt-2 mt-lg-0 w-100 d-flex justify-content-around">
				<li className="nav-item">
					<a className="nav-link text-white-md" href="#loUltimo">Lo último <span className="sr-only">(current)</span></a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#world">Mundo</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#peru">Perú</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#tecnologia">Tecnología</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#economia">Economía</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#cultura">Cultura</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#lifestyle">Lifestyle</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#deporte">Deporte</a>
				</li>
				<li className="nav-item">
					<a className="nav-link" href="#opinion">Opinión</a>
				</li>
			</ul>
		</div>
	</nav>

);

export default Menu;