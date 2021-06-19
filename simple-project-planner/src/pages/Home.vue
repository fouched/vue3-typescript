<template>
	<div class="home">
		<FilterNav @filterChange="currentFilter = $event" :currentFilter="currentFilter" />
		<div v-if="projects.length">
			<div v-for="project in projects" :key="project.id">
				<SingleProject :project="project" @delete="handleDelete" @complete="handleComplete" />
			</div>
		</div>
		<div v-else>
			Loading projects...
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Project from '../types/Project'
import SingleProject from '../components/SingleProject.vue'
import FilterNav from '../components/FilterNav.vue'

export default defineComponent({
	name: 'Home',
	setup() {
		const projects = ref<Project[]>([])
		const currentFilter = ref<string>('all')

		return { projects, currentFilter }
	},
	components: {
		SingleProject,
		FilterNav
	},
	mounted() {
		fetch('http://localhost:3000/projects')
			.then((res) => res.json() as Promise<Project[]>)
			.then((data) => (this.projects = data))
			.catch((err) => console.log(err))
	},
	methods: {
		handleDelete(id: number) {
			this.projects = this.projects.filter((project) => {
				return project.id !== id
			})
		},
		handleComplete(id: number) {
			let p = this.projects.find((project) => {
				return project.id === id
			})
      if (p) {
        console.log("flipping complete")
        p.complete = !p.complete
      }
		}
	}
})
</script>
