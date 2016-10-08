import mainModule from './main'; 
import authModule from './auth';

const appModules = angular.module('app.modules', [
	mainModule,
	authModule
]);

export default appModules.name;