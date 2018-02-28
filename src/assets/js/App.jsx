import React, { Component } from 'react';

import $ from 'jquery';

import setNewState from './utils/setNewState';

import Menu from './components/Menu.jsx';
import LatestNewsSection from './components/LatestNewsSection.jsx';
import WorldNews from './components/WorldNews.jsx';
import TechNews from './components/TechNews.jsx';
import EducationNews from './components/EducationNews.jsx';
import OpinionNews from './components/OpinionNews.jsx';
import Carousel from './components/Carousel.jsx';
import Footer from './components/Footer.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			latestNews: [],
			worldTitle: '',
			worldNews: [],
			techTitle: '',
			techNews: [],
			educationTitle: '',
			educationNews: [],
			opinionTitle: '',
			opinionNews: [],
			carouselElements: [],
		};
	}

	componentDidMount() {
		$.get('/api/categories/', (response) => {
			$.each(response, (i, data) => {
				 if (data.id === 1) {
					this.setState(setNewState('worldTitle', data.title));
				} else if (data.id === 2) {
					this.setState(setNewState('techTitle', data.title));
				} else if (data.id === 3) {
					this.setState(setNewState('educationTitle', data.title));
				} else if (data.id === 4) {
					this.setState(setNewState('opinionTitle', data.title));
				}
			});
		});

		$.get('/api/news/', (response) => {
			$.each(response, (i, data) => {
				$.each(data.categories, (ind, categorie) => {
					if (categorie === 0) {
						this.setState(setNewState('latestNews', this.state.latestNews.concat(data)));
					} else if (categorie === 1) {
						this.setState(setNewState('worldNews', this.state.worldNews.concat(data)));
					} else if (categorie === 2) {
						this.setState(setNewState('techNews', this.state.techNews.concat(data)));
					} else if (categorie === 3) {
						this.setState(setNewState('educationNews', this.state.educationNews.concat(data)));
					} else if (categorie === 4) {
						this.setState(setNewState('opinionNews', this.state.opinionNews.concat(data)));
					} else if (categorie === 5) {
						this.setState(setNewState('carouselElements', this.state.carouselElements.concat(data)));
					}
				});
			});
		});
	}

	render() {
		return (
			<div>
				<Menu/>
				<div className='container-fluid' id='app'>
					<LatestNewsSection latestElements={this.state.latestNews}/>
					<WorldNews worldElements={this.state.worldNews} title={this.state.worldTitle}/>
					<TechNews techElements={this.state.techNews} title={this.state.techTitle}/>
					<EducationNews education={this.state.educationNews} title={this.state.educationTitle}/>
					<OpinionNews opinion={this.state.opinionNews} title={this.state.opinionTitle}/>
					<Carousel carouselElements={this.state.carouselElements} className='d-none d-sm-block'/>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default App;