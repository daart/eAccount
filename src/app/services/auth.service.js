class AuthService {
	constructor($http, $state) {
		"ngInject";

		this._token = null;

		Object.assign(this, {$http, $state});
	};

	get logged() {
		return this._token !== null;
	}

	login(formData) {
		this.$http.post('http://localhost:6590/api/auth/signin', formData)
			.then( (res) => {
				const {success, message, token} = res.data;

				if(success) {
					this.token = token;
					this.$state.go('main.dashboard');

				} else {
					alert(message);
				}
			});
	}

	set token(token) {
		this._token = token;

		localStorage.setItem('token', token);
	}

	get token() {
		return this._token;
	}

}

export default AuthService;