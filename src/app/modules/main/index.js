import component from './main.component';
import components from './components';

const main = angular.module('main', [components]);

main.component('main', component);

main.config(($stateProvider) => {
	"ngInject";

	$stateProvider
		.state('main.dashboard', {
			url: 'dashboard', 
			component: 'dashboard'
		})
		.state('main.settings', {
			url: 'settings',
			component: 'settings'
		})
		// .state('main.goals', {
		// 	url: '/goals', 
		// 	component: 'goals'
		// })
		// .state('main.accounts', {
		// 	url: '/accounts', 
		// 	component: 'accounts'
		// });
});

export default main.name;