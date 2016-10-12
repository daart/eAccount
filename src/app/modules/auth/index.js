import components from './components';
import component from './auth.component';

const auth = angular.module('auth', [components]);

auth.component('auth', component);

auth.config(($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('auth.login', {
			url: '/login',
			component: 'login'
		})
		.state('auth.register', {
			url: '/register',
			component: 'register'
		});
});

export default auth.name;