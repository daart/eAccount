import template from './category_form.template.html';
import controller from './category_form.controller';

const categoryFormComponent = {
	template,
	controller,
	bindings: {
		types: '<',
		categoryId: '<'
	}
}

export default categoryFormComponent;