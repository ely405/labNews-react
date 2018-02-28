import React from 'react';

import setNewState from '../utils/setNewState';
import BaseNews from './BaseNews.jsx';

import News25Img from '../../img/news/news-25.png';
import News26Img from '../../img/news/news-26.png';
import News27Img from '../../img/news/news-27.png';
import News28Img from '../../img/news/news-28.png';
import News31Img from '../../img/news/news-31.png';


const OpinionNews = (props) => {
	const rowClass = [
		{
			0: 'news-25.png',
			classElement: 'col-md-3',
			classImg: 'h-medium',
			classCard: '',
		}, {
			1: 'news-26.png',
			classElement: 'col-md-3',
			classImg: 'h-medium',
		}, {
			2: 'news-27.png',
			classElement: 'col-md-3 flex-row flex-md-column',
			classImg: 'h-small h-md-medium',
			classCard: 'col-6 col-md-12',
		}, {
			3: 'news-28.png',
			classElement: 'col-12 d-md-none d-lg-none flex-row flex-md-column',
			classImg: 'h-small h-md-medium',
			classCard: 'col-6 col-md-12',
		}, {
			4: 'news-31.png',
			classElement: 'col-md-3 flex-row flex-md-column',
			classImg: 'h-small col-md-12 h-md-medium',
			classCard: 'col-6 col-md-12',
		},
	];

	const rowElements = props.opinion.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = rowClass.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						id={`world-${name[0]}`}
						key={i}
						imgUrl={`img/${element.img}`}
						title={element.title}
						classStyle={el.classElement}
						classImg={el.classImg}
						classCard={el.classCard}
						isVideo={element.isVideo}
					/>
				);
			}
		});
		return elements;
	});
	return (
		<div id='opinion'>
			<h1>{props.title}</h1>
			<div className="d-flex flex-wrap col-12 p-0">
				{rowElements}
			</div>
		</div>
	);
};

export default OpinionNews;