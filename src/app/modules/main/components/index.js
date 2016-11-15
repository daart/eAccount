import settingsComponent from './settings/settings.compontent';
import dashboardComponent from './dashboard/dashboard.component';
import navbarComponent from './navbar/navbar.component';
import categoriesComponent from './categories/categories.component';
import categoryFormComponent from './categories/category_form/category_form.component';
import categories2Component from './categories2/categories2.component';

const components = angular.module('main.components', []);

components.component('settings', settingsComponent);
components.component('dashboard', dashboardComponent);
components.component('navbar', navbarComponent);
components.component('categories2', categories2Component);


// components.component('categories', categoriesComponent);
// components.component('categoryForm', categoryFormComponent);

export default components.name;