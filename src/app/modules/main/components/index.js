import settingsComponent from './settings/settings.compontent';
import dashboardComponent from './dashboard/dashboard.component';
import navbarComponent from './navbar/navbar.component';

const components = angular.module('main.components', []);

components.component('settings', settingsComponent);
components.component('dashboard', dashboardComponent);
components.component('navbar', navbarComponent);

export default components.name;
