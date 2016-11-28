import controller from './category.form.controller';
import template from './category.form.template.html';

const categoryFormComponent = {
	template,
	controller,
	bindings: {
		close: '&',
		resolve: '<'
	}
};

export default categoryFormComponent;