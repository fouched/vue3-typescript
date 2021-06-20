<template>
	<div class="home">
		<h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term: {{ search }}</p>
    <button @click="stopWatching">stop watching</button>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, watchEffect } from 'vue'

export default defineComponent({
	name: 'Home',
	setup() {
			const names = ref(['Fouche', 'Marien', 'Emily', 'Olivia'])
      const search = ref('')

      const stopWatch = watch(search, () => {
        console.log("watch function run")
      })

      const stopWatchEffect = watchEffect(() => {
        console.log("watch effect function run", search.value)
      })

      const stopWatching = () => {
        stopWatch()
        stopWatchEffect()
      }

      const matchingNames = computed(() => {
        return names.value.filter((name) => name.includes(search.value))
      })

			return { names, search, matchingNames, stopWatching }
	}
})
</script>
