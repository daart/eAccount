import login from './login/login.component';
import register from './register/register.component';

const components = angular.module('auth.components', []);

components.component('register', register);
components.component('login', login);

export default components.name;