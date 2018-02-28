import React from 'react';

import setNewState from '../utils/setNewState';
import BaseNews from './BaseNews.jsx';

import News19Img from '../../img/news/news-19.png';
import News20Img from '../../img/news/news-20.png';
import News21Img from '../../img/news/news-21.png';
import News22Img from '../../img/news/news-22.png';
import News23Img from '../../img/news/news-23.png';
import News30Img from '../../img/news/news-30.png';


const EducationNews = (props) => {
	const leftColumn = [
		{
			0: 'news-19.png',
			classElement: 'col-md-6',
			classCard: '',
			classImg: 'h-medium',
		}, {
			1: 'news-20.png',
			classElement: 'col-md-6',
			classCard: '',
			classImg: 'h-medium',
		}, {
			2: 'news-23.png',
			classElement: 'col-md-12',
			classImg: 'h-small',
			classCard: '',
		},
	];

	const leftColumnElements = props.education.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = leftColumn.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						id={`world-${name[0]}`}
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
			0: 'news-21.png',
			classElement: 'col-md-6',
			classImg: 'h-small h-md-medium',
		}, {
			1: 'news-22.png',
			classElement: 'col-md-6',
			classImg: 'h-small h-md-medium',
		}, {
			2: 'news-30.png',
			classElement: 'col-md-12 d-none d-md-block',
			classImg: 'h-small',
		},
	];

	const rightColumnElements = props.education.map((element, i) => {
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
		<div id='cultura'>
		    <h1>{props.title}</h1>
			<div className="d-flex flex-wrap">
				<div className="col-md-6 d-flex flex-wrap p-0">
					{leftColumnElements}
				</div>
				<div className="col-md-6 d-flex flex-wrap flex-column-reverse flex-md-row p-0">
					{rightColumnElements}
				</div>
			</div>
    	</div>
	);
};

export default EducationNews;