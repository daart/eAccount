class LoginController {
	constructor(AuthService) {
		"ngInject";
		Object.assign(this, {AuthService});
	}

	submitHandler() {
		if(this.loginForm.$valid) {
			this.AuthService.login(this.formData); 
		}
	}
}

export default LoginController;