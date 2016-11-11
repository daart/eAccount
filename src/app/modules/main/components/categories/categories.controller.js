class CategoriesController {

	constructor($http, $uibModal) {
		"ngInject";

		Object.assign(this, {$http, $uibModal});

		this.loading = true;
		this.categories = [];
		this.types = [];
		this.catsByType = {};
		this.tree =  [
			{
				title: '1',
				children: null
			},
			{
				title: '2',
				children: [
					{
						title: '3',
						children: null
					},
					{
						title: '4',
						children: [
							{
								title: '5',
								children: null
							}
						]
					},
					{
						title: '6',
						children: null
					}
				]
			},
			{
				title: '7',
				children: [
					{
						title: '8',
						children: [
							{
								title: '9',
								children: [
									{
										title: '10',
										children: [
											{
												title: '11',
												children: null
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]

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

	showModal(catId) {
		this.$uibModal.open({
			component: 'categoryForm',
			resolve: {
				types: () => this.types,
				categories: () => this.categories,
				categoryId: () => catId
			}
		});
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