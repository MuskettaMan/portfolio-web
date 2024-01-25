<template>
	<div class="login">
		<Navbar></Navbar>
		<div class="login-container">
			<h2>Login</h2>
			<form @submit.prevent="login" method="post" class="login-form">
				<label for="username">Username:</label>
				<input type="text" name="username" id="username" v-model="username" required class="login-input"/>

				<label for="password">Password:</label>
				<input type="password" name="password" id="password" v-model="password" required
					   class="login-input"/>

				<button type="submit" class="login-button">Login</button>
			</form>
		</div>
	</div>
</template>

<script>
import Navbar from "~/components/Navbar";
import {ref} from "vue";
import {useRouter} from "vue-router";
import {useMainStore} from '~/store/index'

export default {
	name: 'LoginView',
	title: "Ferri's Portfolio",
	components: {
		Navbar
	},
	setup() {
		const username = ref('');
		const password = ref('');
		const router = useRouter();
		const store = useMainStore();

		const login = () => {
			apiManager.login(username.value, password.value).then((result) => {
				store.login(result.token, result.name, result.expiresIn);
				router.push('/cms');
			});
		};

		return {
			username,
			password,
			login
		}
	}
}
</script>

<style lang="scss" scoped>
.login-container {
	max-width: 400px;
	margin-top: 3rem;
	margin-left: 3rem;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
	background-color: #fff;
}

.login-form {
	display: grid;
	gap: 15px;
}

.login-input {
	width: 100%;
	padding: 10px;
	border: 1px solid #ccc;
	border-radius: 3px;
	box-sizing: border-box;
	font-size: 16px;
}

.login-button {
	width: 100%;
	padding: 10px;
	background-color: $flame;
	color: #fff;
	border: none;
	border-radius: 3px;
	cursor: pointer;
	font-size: 16px;
}

.login-button:hover {
	background-color: #45a049;
}
</style>
  