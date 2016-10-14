import auth from './auth.service';

const services = angular.module('app.services', []);
services.service('AuthService', auth);


export default services.name;