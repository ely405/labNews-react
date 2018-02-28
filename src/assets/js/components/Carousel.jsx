import React from 'react';
import $ from 'jquery';

import BaseNews from './BaseNews.jsx';

import News29Img from '../../img/news/news-29.png';
import News30Img from '../../img/news/news-30.png';
import News31Img from '../../img/news/news-31.png';
import News32Img from '../../img/news/news-32.png';
import leftArrow from '../../img/flecha1.png';
import rightArrow from '../../img/flecha2.png';


const Carousel = (props) => {
	$('#carouselNews').on('slide.bs.carousel', (e) => {
		const carouselElement = $(e.relatedTarget);
		const idElement = carouselElement.index();
		const itemsPerSlide = 3;
		const totalItems = $('.carousel-item').length;

		if (idElement >= totalItems - (itemsPerSlide - 1)) {
			const it = itemsPerSlide - (totalItems - idElement);
			for (let i = 0; i < it; i++) {
				if (e.direction === 'left') {
					$('.carousel-item').eq(i).appendTo('.carousel-inner');
				} else {
					$('.carousel-item').eq(0).appendTo('.carousel-inner');
				}
			}
		}
	});

	const itemsDeatil = [{
		0: 'news-29.png',
		classElement: 'carousel-item col-md-4 active',
		classImg: '',
	}, {
		1: 'news-30.png',
		classElement: 'carousel-item col-md-4',
		classImg: '',
	}, {
		2: 'news-31.png',
		classElement: 'carousel-item col-md-4',
		classImg: '',
	}, {
		3: 'news-32.png',
		classElement: 'carousel-item col-md-4',
		classImg: '',
	}];

	const carouselItems = props.carouselElements.map((element, i) => {
		const imgName = element.img;
		const elements = itemsDeatil.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						key={i}
						imgUrl={`img/${element.img}`}
						title={element.title}
						classStyle={el.classElement}
						classImg={el.classImg}
						isVideo={element.isVideo}
					/>
				);
			}
		});
		return elements;
	});


	return (
		<div className="container-fluid d-none d-sm-block p-0">
			<div id="carouselNews" className="carousel slide" data-ride="carousel" data-interval="9000">
				<div className="carousel-inner row w-100 mx-auto" role="listbox">
					{carouselItems}
				</div>
				<a className="carousel-control-prev" href="#carouselNews" role="button" data-slide="prev">
					<img src={leftArrow} alt='Flecha hacia la izquierda'/>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next text-faded" href="#carouselNews" role="button" data-slide="next">
					<img src={rightArrow} alt='Flecha hacia la derecha'/>
					<span className="sr-only">Next</span>
				</a>
			</div>

		</div>
	);
};

export default Carousel;