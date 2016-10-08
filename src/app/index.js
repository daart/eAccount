import router from 'angular-ui-router';

import appModules from './modules';
import appModuleComponent from './app.component';

const appModule = angular.module('app', [
	router,

	appModules
]);

appModule.component('app', appModuleComponent);

appModule.config(($stateProvider, $urlRouterProvider) => {
	"ngInject";

	$stateProvider
		.state('auth', {
			url: '/auth',
			component: 'auth'
		})
		.state('main', {
			url: '/',
			component: 'main'
		})
		
	$urlRouterProvider.otherwise('/');
});

export default appModule;