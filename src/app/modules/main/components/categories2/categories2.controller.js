class Categories2Controller {
	constructor($http, $uibModal) {
		"ngInject";

		Object.assign(this, {$http, $uibModal});

		this.types = [];
		this.categories = [];

		this.loading = true;

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

				this.loading = false;
			});
	}

	remove(catId) {
		this.$http.delete('http://localhost:6590/api/categories_sb/' + catId)
			.then(res => this.categories = this.categories.filter(el => el._id !== catId));
	}

	openPopUp(catId) {
		this.modal = this.$uibModal.open({
			component: 'category2Form',
			resolve: {
				types: () => this.types,
				categories: () => this.categories,
				categoryId: () => catId,
				onUpdate: () => this.onFormSubmit.bind(this)
			}
		});
	}

	onFormSubmit({category}) {
		var isNew = true;

		this.categories.forEach((catInArray, index) => {
			if(catInArray._id === category._id) {
				this.categories[index] = category;
				isNew = false;
			}
		});

		if(isNew) {
			this.categories.push(category);
		}

		if(angular.isDefined(this.modal)) {
			this.modal.close();
			delete this.modal;
		}
	}
	
};

export default Categories2Controller;