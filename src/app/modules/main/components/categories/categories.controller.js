class CategoriesController {

	constructor($http, $uibModal) {
		"ngInject";

		Object.assign(this, {$http, $uibModal});

		this.loading = true;
		this.categories = [];
		this.types = [];
		this.catsByType = {};
		this.tree = [];

		this.getCategories();
	}

	getCategories() {
		this.$http.get('http://localhost:6590/api/categories')
			.then( (res) => {
				const {types, categories} = res.data;

				this.categories = categories;
				this.types = types;
				this.activeType = types[0];
				this.loading = false;
			});
	}

	showModal(catId) {
		this.modal = this.$uibModal.open({
			component: 'categoryForm',
			resolve: {
				types: () => this.types,
				categories: () => this.categories,
				categoryId: () => catId,
				onUpdate: () => this.onFormSubmit.bind(this)
			}
		});
	}

	onFormSubmit(catFromForm) {
		var isNew = true;

		this.categories.forEach( (catInArray, index) => {
			if(catInArray._id === catFromForm._id) {
			 	this.categories[index] = catFromForm;
			 	isNew = false;
			} 
		});

		if(isNew) {
			this.categories.push(catFromForm);
		}

		this.modal.close();
	}

	remove(catId) {
		this.$http.delete('http://localhost:6590/api/categories/' + catId)
			.then( (res) => {
				this.categories = this.categories.filter( (cat) => {
					return cat._id !== catId;
				});
			});
	}

}

export default CategoriesController;