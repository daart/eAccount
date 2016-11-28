class Cat2formController {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});
		// this.getTypes();
	}

	$onInit() {
		// this.types = this.resolve.types;
		// this.categories = this.resolve.categories;

		Object.assign(this, this.resolve);

		console.log(this);
	}

	getTypes() {
		this.$http.get('http://localhost:6590/api/categories_sb/types')
			.then((res) => {
				const {types} = res.data;

				this.types = types;
			});
	}

	handleSubmit() {
		if(this.categorySBForm.$valid) {
			this.$http.post('http://localhost:6590/api/categories_sb', this.categoryForm)
				.then((res) => {
					const {success, category} = res.data;
				});
		}
	}

}

export default Cat2formController;