import controller from './category.form.controller';
import template from './category.form.template.html';
import './category.form.styles.scss';

const categoryFormComponent = {
	template,
	controller,
	bindings: {
		closeModal: '&close',
		resolve: '<?',
		onUpdate: '&?',
		types: '<?',
		categories: '<?',
		categoryId: '<?'
	}
};

export default categoryFormComponent;