import router from 'angular-ui-router';
import messages from 'angular-messages';
import 'angular-ui-router/release/stateEvents';
import modal from 'angular-ui-bootstrap/src/modal';

import modules from './modules';
import services from './services';
import appComponent from './app.component';

const app = angular.module('app', [
		router,
		messages,
		modal,
		'ui.router.state.events',
		
		modules,
		services
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
			component: 'main',
			resolve: {
				authCheck: ($state, AuthService, $q) => {

					if (!AuthService.logged){
						if (AuthService.request !== null){
							return AuthService.request;
						} else {
							$state.go('auth.login');
							return $q.reject();
						}
					}

					return;
				}  
			}
		});

	$urlRouterProvider.otherwise('/dashboard');

});

export default app.name;