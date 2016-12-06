import settingsComponent from './settings/settings.compontent';
import dashboardComponent from './dashboard/dashboard.component';
import navbarComponent from './navbar/navbar.component';
import categoriesComponent from './categories/categories.component';
import categoryFormComponent from './categories/categoryForm/category.form.component';
// snadbox

// import sbx_categoriesComponent from './categories-sbx/categories.component';
// import sbx_categoryFormComponent from './categories-sbx/category_form/category_form.component';

// components.component('sbxCategories', sbx_categoriesComponent);
// components.component('sbxCategoryForm', sbx_categoryFormComponent);

const components = angular.module('main.components', []);

components.component('settings', settingsComponent);
components.component('dashboard', dashboardComponent);
components.component('navbar', navbarComponent);


components.component('categories', categoriesComponent);
components.component('categoryForm', categoryFormComponent);

export default components.name;