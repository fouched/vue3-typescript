<template>
	<div class="home">
		<h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
	name: 'Home',
	setup() {
			const names = ref(['Fouche', 'Marien', 'Emily', 'Olivia'])
      const search = ref('')

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

			return { names, search, matchingNames }
	}
})
</script>
