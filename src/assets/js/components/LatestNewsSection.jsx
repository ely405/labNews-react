import React, { Component } from 'react';
import $ from 'jquery';

import setNewState from '../utils/setNewState';
import BaseNews from './BaseNews.jsx';

import MitBuscaImg from '../../img/news/news-0.png';
import StanfordUniversityImg from '../../img/news/news-1.png';
import TechStartupImg from '../../img/news/news-2.png';
import VolunteersForEducationImg from '../../img/news/news-3.png';

const LatestNewsSection = (props) => {
	const clases = [
		{
			 0: 'news-0.png',
			 classElement: 'col-12',
			 classImg: 'h-medium',
			classCard: 'col-md-8 position-absolute',
			classBrief: 'col-md-10 d-none d-md-block',
		}, {
			1: 'news-1.png',
			classElement: 'col-md-6',
			classImg: 'h-medium',
			classCard: '',
		},
		{
			2: 'news-2.png',
			classElement: 'col-md-3 flex-row flex-md-column',
			classImg: 'h-small',
			classCard: 'col-6 col-md-12',
		},
		{
			3: 'news-3.png',
			classElement: 'col-md-3 flex-row flex-md-column',
			classImg: 'h-small',
			classCard: 'col-6 col-md-12',
		},
	];
	const eachNewsComponent = props.latestElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = clases.map((el, ind) => {
			if (imgName === el[ind]) {
				return <BaseNews
					id={`latest-${name[0]}`}
					key={i}
					imgUrl={`img/${element.img}`}
					title={element.title}
					classStyle={el.classElement}
					classImg={el.classImg}
					classCard={el.classCard}
					classBrief={el.classBrief}
					isVideo={element.isVideo}
					hasBrief={element.brief}
				/>;
			}
		});
		return elements;
	});
	return (
		<div className='d-flex flex-wrap' id='loUltimo'>
			{eachNewsComponent}
		</div>
	);
};

export default LatestNewsSection;