import router from 'angular-ui-router';

import modules from './modules';
import appComponent from './app.component';

const app = angular.module('app', [
		router,
		modules
	]);

app.component('app', appComponent);

app.config(($stateProvider, $urlRouterProvider) => {
	"ngInject";

	$stateProvider
		.state('auth', {
			url: '/auth',
			component: 'auth'
		})
		.state('main', {	
			url: '/',
			abstract: true,
			component: 'main'
		});

	$urlRouterProvider.otherwise('/dashboard');

});

export default app.name;