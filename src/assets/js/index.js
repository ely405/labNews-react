import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap';

import App from './App.jsx';

import '../scss/main.scss';

import favicon from '../img/favicon.jpg';

ReactDOM.render((<App className='container-fluid'/>), document.getElementById('root'));