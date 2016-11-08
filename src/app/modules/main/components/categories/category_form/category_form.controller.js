class CategoryFormController {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		this.resetForm();
	}

	$onChanges(changes){
		console.log(changes);
		if (angular.isDefined(changes.categoryId)){
			if (this.updateMode){
				this.$http.get('http://localhost:6590/api/categories/' + this.categoryId)
					.then(res => {
						const {category} = res.data;

						this.populateForm(category);
					})
			} else {
				this.resetForm();
			}
		}
	}


	resetForm(){
		this.formData = {
			title: '',
			active: true,
			type: this.types[0]
		}
	}

	populateForm(category){
		this.formData = {
			title: category.title,
			active: category.active,
			type: category.type		
		}
	}

	get updateMode() {
		return angular.isDefined(this.categoryId);
	}

	cancel(){
		delete this.categoryId;
		this.resetForm();
	}

	submitHandler() {
		if(this.categoryForm.$valid) {
			if (this.updateMode){
				this.$http.put('http://localhost:6590/api/categories/' + this.categoryId, this.formData)
				.then( (res) => {
					const {success, newCategory} = res.data;

					if(success) {
						console.log(newCategory);
					} else {
						console.log('Failed!');
					}
				});
			} else {
				this.$http.post('http://localhost:6590/api/categories', this.formData)
					.then( (res) => {
						const {success, newCategory} = res.data;

						if(success) {
							console.log(newCategory);
						} else {
							console.log('Failed!');
						}
					});
			}
		}
	}
}

export default CategoryFormController;