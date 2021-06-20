<template>
	<div class="home">
		<h1>Home</h1>
    
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, watchEffect } from 'vue'

export default defineComponent({
	name: 'Home',
	setup() {
    const posts = ref([
      {title: 'Welcome to the blog', body: 'Lorem ipsum', id: 1},
      {title: 'Top 5 CSS tips', body: 'Lorem ipsum', id: 2}
    ])

    return { posts }
	}
})
</script>
