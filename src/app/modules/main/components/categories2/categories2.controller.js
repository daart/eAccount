class Categories2Controller {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		this.types = [];
		this.categories = [];
		this.categoryForm = {};

		this.getAllCategories();
	}

	getAllCategories() {
		this.$http.get('http://localhost:6590/api/categories_sb')
			.then((res) => {
				const {categories, types} = res.data;

				this.types = types;
				this.categories = categories;
				this.activeType = types[0];

			});
	}

	remove(catId) {
		this.$http.delete('http://localhost:6590/api/categories_sb/' + catId)
			.then(res => {
				this.categories = this.categories.filter(el => el._id !== catId);
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
	
};

export default Categories2Controller;