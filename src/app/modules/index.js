import auth from './auth';
import main from './main';

const modules = angular.module('modules', [auth, main]);

export default modules.name;
