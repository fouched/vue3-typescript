<template>
	<div class="home">
		Home
		<p>My name is {{ person.name }} and my age is {{ person.age }}</p>
		<button @click="handleClick">click me</button>
		<button @click="person.age++">increase age</button>
		<input type="text" v-model="person.name" />
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Person from '../types/Person'

export default defineComponent({
	name: 'Home',
	setup() {
		const person = ref<Person>({ name: 'Fouche', age: 49 })

		const handleClick = () => {
			person.value.name = 'Luigi'
			person.value.age = 30
		}

		return { person, handleClick }
	}
})
</script>
