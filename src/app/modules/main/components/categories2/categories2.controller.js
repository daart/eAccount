class Categories2Controller {
	constructor($http, $uibModal) {
		"ngInject";

		Object.assign(this, {$http, $uibModal});

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
				this.parent = null;
			});
	}

	remove(catId) {
		this.$http.delete('http://localhost:6590/api/categories_sb/' + catId)
			.then(res => {
				this.categories = this.categories.filter(el => el._id !== catId);
			});
	}

	openPopUp(catId) {
		this.modal = this.$uibModal.open({
			component: 'category2Form',
			resolve: {
				types: () => this.types,
				categories: () => this.categories
			}
		});
	}
	
};

export default Categories2Controller;