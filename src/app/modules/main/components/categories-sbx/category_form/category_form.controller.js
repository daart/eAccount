class CategoryFormController {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		if (angular.isDefined(this.resolve)){
			Object.assign(this, this.resolve);
		}

		this.resetForm();
	}

	resetForm(){
		this.formData = {
			title: '',
			active: true,
			type: this.types[0],
			parent: null
		}
	}

	$onChanges(changes) {
		if( angular.isDefined(changes.categoryId) ) {
			if(this.updateMode) {
				this.$http.get('http://localhost:6590/api/categories/' + this.categoryId)
					.then( (res) => {
						const {category} = res.data;

						this.populateForm(category);
					});
			}
		}
	}

	cancel() {
		delete this.categoryId;

		this.resetForm();
	}

	get updateMode() {
		return angular.isDefined(this.categoryId);
	}

	populateForm(category) {
		this.formData = {
			title: category.title,
			active: category.active,
			type: category.type,
			parent: this.categories.find(c => c._id === category.parent) || null
		}
	}

	serialize(){
		return {
			title: this.formData.title,
			active: this.formData.active,
			type: this.formData.type,
			parent: this.formData.parent === null ? null : this.formData.parent._id
		}
	}

	submitHandler() {
		if(this.categoryForm.$valid) {
			if(this.updateMode) {
				this.$http.put('http://localhost:6590/api/categories/' + this.categoryId, this.serialize())
					.then( (res) => {
						const {success, category} = res.data;
						this.onUpdate(category);

					});

			} else {

				this.$http.post('http://localhost:6590/api/categories', this.serialize())
					.then( (res) => {
						const {success, newCategory} = res.data;

						this.onUpdate(newCategory);
						
					});
			}		
		}
	}
}

export default CategoryFormController;