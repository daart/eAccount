class CategoriesController {

	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		this.loading = true;

		this.categories = [];
		this.types = [];

		this.catsByType = {};

		this.getCategories();
	}

	getCategories() {
		this.$http.get('http://localhost:6590/api/categories')
			.then( (res) => {
				const {types, categories} = res.data;

				this.categories = categories;
				this.types = types;

				this.catsByType = {};
				this.types.forEach(type => this.catsByType[type] = this.categories.filter((category) => category.type === type));

				this.activeType = types[0];

				this.loading = false;
			});
	}
}

export default CategoriesController;