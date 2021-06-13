<template>
	<!-- we are not connected to a db yet so prevent default submit behaviour -->
	<form @submit.prevent="handleSubmit">
		<label>Email:</label>
		<input type="email" required v-model="email" />
		<label>Password:</label>
		<input type="password" required v-model="password" />
		<div v-if="passwordError" class="error">{{ passwordError }}</div>
		<label>Role:</label>
		<select v-model="role">
			<option value="developer">Web Developer</option>
			<option value="designer">Web Designer</option>
		</select>
		<label>Skills: (use comma to seperate)</label>
		<input type="text" v-model="tempSkill" @keyup="addSkill" />
		<div>
			<div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">
				{{ skill }}
			</div>
		</div>
		<div class="row">
			<label>Tools:</label>
			<input type="checkbox" value="vscode" v-model="tools" />
			<label>VS Code</label>
			<input type="checkbox" value="IntelliJ" v-model="tools" />
			<label>IntelliJ</label>
			<input type="checkbox" value="Eclipse" v-model="tools" />
			<label>Eclipse</label>
		</div>
		<div>
			<input type="checkbox" class="terms" required v-model="terms" />
			<label>Accept terms and conditions</label>
		</div>

		<div class="submit">
			<button>Create an Account</button>
		</div>
	</form>
	<p>Email: {{ email }}</p>
	<p>Password: {{ password }}</p>
	<p>Role: {{ role }}</p>
	<p>Terms: {{ terms }}</p>
	<p>Tools: {{ tools }}</p>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
	name: 'SignupForm',
	setup() {
		const email = ref('')
		const password = ref('')
		const role = ref('')
		const terms = ref(false)
		const tempSkill = ref('')
		const skills = ref<Array<string>>([])
		const tools = ref<Array<string>>([])
		const passwordError = ref('')

		return { email, password, role, terms, tempSkill, skills, tools, passwordError }
	},
	methods: {
		addSkill(e: KeyboardEvent) {
			if (e.key === ',' && this.tempSkill) {
				if (!this.skills.includes(this.tempSkill)) {
					this.skills.push(this.tempSkill.substring(0, this.tempSkill.length - 1))
				}
				this.tempSkill = ''
			}
		},
		deleteSkill(skill: string) {
			this.skills.splice(this.skills.indexOf(skill), 1)
		},
		handleSubmit() {
			this.passwordError = this.password.length > 5 ? '' : 'Password must be at least 6 chars long'
      if (!this.passwordError) {
        console.log('form submitted')
      }
		}
	}
})
</script>

<style>
form {
	max-width: 420px;
	margin: 0px auto;
	background: white;
	text-align: left;
	/* top | right | bottom | left */
	padding: 20px 10px 30px 20px;
	border-radius: 10px;
}
.row {
	display: inline-block; /* dom elements within the div align next to each other */
}
label {
	color: #999;
	display: inline-block;
	/* top | horizontal | bottom */
	margin: 15px 0 0;
	font-size: 0.6em;
	text-transform: uppercase;
	font-weight: bold;
	letter-spacing: 0.75px;
}
input,
select {
	display: block;
	/* vertical | horizontal */
	padding: 3px 3px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
}
input[type='checkbox'] {
	display: inline-block;
	width: 16px;
	margin: 0 6px 0 10px;
	position: relative;
	top: 2px;
}
input.terms {
	display: inline-block;
	width: 16px;
	margin: 40px 6px 0 0;
	position: relative;
	top: 2px;
}
.pill {
	display: inline-block;
	margin: 20px 10px 0 0;
	padding: 6px 12px;
	background: #eee;
	border-radius: 20px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	color: #777;
	cursor: pointer;
}
button {
	background: #0b6dff;
	border: 0;
	padding: 10px 20px;
	margin-top: 20px;
	color: white;
	border-radius: 15px;
}
.submit {
	text-align: center;
}
.error {
	color: #ff0062;
	margin-top: 10px;
	font-size: 0.8em;
	font-weight: bold;
}
textarea:focus,
input:focus {
	outline: none;
	background-color: rgb(255, 255, 240);
}
select:focus {
	outline: none;
}
</style>
