import template from './child.template.html';
import './child-component.styles.scss';

const childComponent = {
	template,
	bindings: {
		anyshit: '<',
		othershit: '@'
	}
};

export default childComponent;