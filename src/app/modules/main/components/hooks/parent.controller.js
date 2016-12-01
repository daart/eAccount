class ParentController {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		this.val = 'value core!';
		this.anyshit = {prop1: "Property 1 ", prop2: 2222, prop3: ['sadf', 234234, 'aaasd']}
	}

}

export default ParentController;