
const firebase = require('firebase');

const firebaseConfig = require('../firebase-config.js');

const config = {
	apiKey: firebaseConfig.API_KEY,
	authDomain: firebaseConfig.AUTH_DOMAIN,
	databaseURL: firebaseConfig.DATABASE_URL,
	projectId: firebaseConfig.PROJECT_ID,
	storageBucket: firebaseConfig.STORAGE_BUCKET,
	messagingSenderId: firebaseConfig.MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);


let loadNews = (id) => {
	let url = '/news/';
	url += (id != undefined) ? id : '';
	return firebase.database().ref(url).once('value').then((snapshot) => {
    return snapshot.val();
    });
};

let loadCategories = (id) => {
	let url = '/categories/';
	url += (id != undefined) ? id : '';
	return firebase.database().ref(url).once('value').then((snapshot) => {
        return snapshot.val();
    });
};

module.exports = {
	news: loadNews,
	categories: loadCategories,
};