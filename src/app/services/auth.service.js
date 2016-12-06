import decode from 'jwt-decode';

class AuthService {
	constructor($http, $state, $q) {
		"ngInject";

		this.user = null;
		this._token = null;
		this.request = null;

		Object.assign(this, {$http, $state, $q});

		this.invalidateToken();
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

	invalidateToken() {
		const token = localStorage.getItem('token');

		if(token === null) {
			return;
		}

		this.request = this.$http.post('http://localhost:6590/api/auth/validateToken', {token})
			.then((res) => {
				const {success, token, message} = res.data;
				this.request = null;
				
				if (success){					
					this.token = token;

					return this.$q.resolve();
				} else {
					this.$state.go('auth.login');
					return this.$q.reject();
				}
			});		
	}

	parseToken() {
		const {userName} = decode(this.token);

		this.user = {
			userName
		}
	}

	set token(token) {
		this._token = token;
		this.parseToken();
		localStorage.setItem('token', token);
	}

	get token() {
		return this._token;
	}

}

export default AuthService;