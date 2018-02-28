import React, { Component } from 'react';
import $ from 'jquery';

import setNewState from '../utils/setNewState';
import BaseNews from './BaseNews.jsx';

import News4Img from '../../img/news/news-4.png';
import News5Img from '../../img/news/news-5.png';
import News6Img from '../../img/news/news-6.png';
import News7Img from '../../img/news/news-7.png';
import News8Img from '../../img/news/news-8.png';
import News9Img from '../../img/news/news-9.png';
import News10Img from '../../img/news/news-10.png';
import News11Img from '../../img/news/news-11.png';
import News12Img from '../../img/news/news-12.png';
import News13Img from '../../img/news/news-13.png';

const WorldNews = (props) => {
	const firstColumn = [
		{
			0: 'news-4.png',
			classElement: 'col-md-3',
			classImg: 'h-medium',
			classCard: '',
		},
	];

	const firstColumnElements = props.worldElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = firstColumn.map((el, ind) => {
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


	const secondColumn = [
		{
			0: 'news-5.png',
			classElement: 'col-md-6 flex-row flex-md-column',
			classImg: 'h-small',
			classCard: 'col-6 col-md-12',
		}, {
			1: 'news-6.png',
			classElement: 'col-md-6 d-none d-md-block',
			classImg: 'h-small',
			classCard: '',
		}, {
			2: 'news-7.png',
			classElement: 'col-12 flex-row flex-md-column',
			classImg: 'h-small',
			classCard: 'col-6 col-md-12',
		}, {
			3: 'news-8.png',
			classElement: 'col-12 flex-row flex-md-column',
			classImg: 'h-small',
			classCard: 'col-6 col-md-12',
		},
	];

	const secondColumnElements = props.worldElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = secondColumn.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						key={i}
						id={`world-${name[0]}`}
						imgUrl={`img/${element.img}`}
						title={element.title}
						classStyle={el.classElement}
						classImg={el.classImg}
						classCard={el.classCard}
					/>
				);
			}
		});
		return elements;
	});

	const thirdColumn = [
		{
			0: 'news-9.png',
			classElement: 'col-md-3 d-none d-md-block',
			classImg: 'h-large',
			classCard: '',
		},
	];

	const thirdColumnElements = props.worldElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = thirdColumn.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						key={i}
						id={`world-${name[0]}`}
						imgUrl={`img/${element.img}`}
						title={element.title}
						classStyle={el.classElement}
						classImg={el.classImg}
					/>
				);
			}
		});
		return elements;
	});

	const rowBotton = [
		{
			0: 'news-10.png',
			classElement: 'col-md-3 d-none  d-md-block',
			classImg: 'h-small',
		}, {
			1: 'news-11.png',
			classElement: 'col-md-3 d-none d-md-block',
		}, {
			2: 'news-12.png',
			classElement: 'col-md-3 d-none d-md-block',
		}, {
			3: 'news-13.png',
			classElement: 'col-md-3 d-none d-md-block',
		},
	];

	const rowBottonElements = props.worldElements.map((element, i) => {
		const imgName = element.img;
		const name = imgName.split('.');
		const elements = rowBotton.map((el, ind) => {
			if (imgName === el[ind]) {
				return (
					<BaseNews
						key={i}
						id={`world-${name[0]}`}
						imgUrl={`img/${element.img}`}
						title={element.title}
						classStyle={el.classElement}
						classImg={el.classImg}
					/>
				);
			}
		});
		return elements;
	});

	return (
		<div id='world'>
			<h1>{props.title}</h1>
			<div className='d-flex flex-wrap'>
				{firstColumnElements}
				<div className='col-md-6 d-flex flex-wrap p-0'>
					{secondColumnElements}
				</div>
				{thirdColumnElements}
			</div>
			<div className='d-flex flex-wrap'>
				{rowBottonElements}
			</div>
		</div>
	);
};

export default WorldNews;