<template>
	<nav class="filter-nav">
		<button @click="updateFilter('all')" :class="{ active: currentFilter === 'all' }">View All</button>
		<button @click="updateFilter('completed')" :class="{ active: currentFilter === 'completed' }">Completed</button>
		<button @click="updateFilter('ongoing')" :class="{ active: currentFilter === 'ongoing' }">Ongoing</button>
	</nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'FilterNav',
	props: ['currentFilter'],
	methods: {
		updateFilter(filter: string) {
			this.$emit('filterChange', filter)
		}
	}
})
</script>

<style></style>
