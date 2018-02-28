import React from 'react';

import PlayButtonImg from '../../img/play-button.png';


const BaseNews = (props) => {
	const isVideoComponent = props.isVideo ? <img src={PlayButtonImg} alt="Botón play" width='100' height='100' className={'playBtn position-absolute'}/> : '';
	const hasBriefDescription = props.hasBrief ? <h5 className={props.classBrief}>{props.hasBrief}</h5> : '';
	return (
		<div className={`card bg-dark p-0 mb-3 text-white ${props.classStyle}`} id={props.id}>
			<div>
				<img className={`card-img-top img-fluid ${props.classImg}`} src={props.imgUrl} alt={props.imgAlt}/>
				{isVideoComponent}
			</div>
			<div className={`card-block ${props.classCard}`}>
				<h2 className="card-title">{props.title}</h2>
				{hasBriefDescription}
			</div>
		</div>
	);
};

export default BaseNews;