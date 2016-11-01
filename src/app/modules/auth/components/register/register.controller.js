class RegisterController {
	constructor($http, $state) {
		"ngInject";
		Object.assign(this, {$http, $state});
	}

	submitHandler() {
		if(this.registerForm.$valid) {
			this.$http.post('http://localhost:6590/api/auth/register', this.formData)
				.then( (res) => {
					const {success, message} = res.data;

					if(success) {
						this.$state.go('auth.login');

					} else {
						alert(message);
					}
				});
		}
	}
}
export default RegisterController;