import login from './login'; 
import register from './register'; 

const components = angular.module('auth.components', []);

components.component('login', login);
components.component('register', register);

export default components.name;