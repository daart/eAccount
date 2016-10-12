class LoginController {
	constructor($http, $state) {
		"ngInject";
		Object.assign(this, {$http, $state});
	}

	submitHandler() {
		if(this.loginForm.$valid) {
			this.$http.post('http://localhost:6590/api/auth/signin', this.formData)
				.then( (res) => {
					const {success, message} = res.data;

					if(success) {
						this.$state.go('main.dashboard');

					} else {
						alert(message);
					}
				});
		}
	}
}

export default LoginController;