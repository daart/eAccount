import router from 'angular-ui-router';
import messages from 'angular-messages';

import modules from './modules';
import services from './services';
import appComponent from './app.component';

const app = angular.module('app', [
		router,
		messages,
		
		modules,
		services
	]);

console.log(messages);

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