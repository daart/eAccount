class CategoryFormController {
	constructor($http) {
		"ngInject";

		Object.assign(this, {$http});

		if(angular.isDefined(this.resolve)) {
			Object.assign(this, this.resolve);
		}

		if (angular.isDefined(this.categoryId)) {
			console.log('init fetch');
			this.fetchCategory();
		}
			
		this.resetForm();		

	}

	resetForm() {
		this.formData = {
			title: '',
			active: true,
			parent: null,
			type: this.types[0]
		}
	}


	$onChanges(changes) {
		if (angular.isDefined(changes.categoryId)){
			if (this.updateMode) {
				console.log('category change fetch');
				this.fetchCategory();
			}
		}

		// TODO: delete block code
		if (angular.isDefined(changes.resolve)){
			var resolveCategoryId = changes.resolve.currentValue.categoryId;
			if (this.categoryId !== resolveCategoryId) {
				this.categoryId = resolveCategoryId;
				if (this.updateMode) {
					console.log('resolve fetch');
					this.fetchCategory();
				}
			}
			Object.assign(this, this.resolve);
		}
	}

	fetchCategory(){
		this.$http.get('http://localhost:6590/api/categories/' + this.categoryId)
			.then(res => {
				const {category} = res.data;
				
				this.category = category;
				this.populateForm(category);
			});
	}

	get updateMode() {
		return angular.isDefined(this.categoryId);
	}

	handleSubmit() {	
		if(this.categoryForm.$valid) {
			if(this.updateMode) {
				this.$http.put('http://localhost:6590/api/categories/' + this.categoryId, this.serialize())
					.then(res => {
						const {success, updatedCategory: category} = res.data;
						this.onUpdate({category});
						
					});

			} else {
				this.$http.post('http://localhost:6590/api/categories', this.serialize())
					.then( res => {
						const {success, category} = res.data;

						this.onUpdate({category});
					});
			} 	
			
		}
	}

	populateForm(category) {
		this.formData = {
			title: category.title,
			active: category.active,
			parentId: category.parentId === null 
				? null 
				: this.categories.find(c => c._id === category.parentId),
			type: category.type
		};

	}

	serialize() {
		return {
			title: this.formData.title,
			active: this.formData.active,
			parentId: this.formData.parentId,
			type: this.formData.type
		}
	}

}

export default CategoryFormController;