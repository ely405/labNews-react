import React from 'react';
import $ from 'jquery';

import setNewState from '../utils/setNewState';
import BaseNews from './BaseNews.jsx';

import News14Img from '../../img/news/news-14.png';
import News15mg from '../../img/news/news-15.png';
import News16Img from '../../img/news/news-16.png';
import News17Img from '../../img/news/news-17.png';
import News18Img from '../../img/news/news-18.png';

const TechNews = (props) => {
	const leftColumn = [
		{
			0: 'news-14.png',
			classElement: 'col-md-6',
			classImg: 'h-large',
			classCard: '',
		},
	];

	const leftColumnElements = props.techElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = leftColumn.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						key={i}
						id={`world-${name[0]}`}
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

	const rightColumn = [
		{
			0: 'news-15.png',
			classElement: 'col-md-6 d-none d-md-block',
			classCard: '',
			classImg: 'h-small',
		}, {
			1: 'news-16.png',
			classElement: 'col-md-6 d-none d-md-block',
			classCard: '',
			classImg: 'h-small',
		}, {
			2: 'news-17.png',
			classElement: 'col-md-12 flex-row flex-md-column',
			classCard: 'col-6 col-sm-12',
			classImg: 'h-small',
		}, {
			3: 'news-18.png',
			classElement: 'col-md-12 flex-row flex-md-column',
			classCard: 'col-6 col-sm-12',
			classImg: 'h-small',
		},
	];

	const rightColumnElements = props.techElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = rightColumn.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						id={`world-${name[0]}`}
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
		<div id='tecnologia'>
			<h1>{props.title}</h1>
			<div className='d-flex flex-wrap'>
				{leftColumnElements}
				<div className='col-md-6 d-flex flex-wrap p-0'>
					{rightColumnElements}
				</div>
			</div>
		</div>
	);
};

export default TechNews;