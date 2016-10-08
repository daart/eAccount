import authModuleComponents from './components';
import authModuleComponent from './auth.component.js';

const authModule = angular.module('auth', [
	authModuleComponents
]);
authModule.component('auth', authModuleComponent);

authModule.config( ($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('auth.login', {
			name: 'login',
			url: '/login',
			component: 'login'
		})
		.state('auth.register', {
			name: 'register',
			url: '/register',
			component: 'register'
		})
});

export default authModule.name;