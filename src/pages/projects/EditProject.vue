<template>
	<form @submit.prevent="handleSubmit">
		<label>Title:</label>
		<input type="text" v-model="project.title" required />
		<label></label>
		<textarea v-model="project.details" required></textarea>
		<button>Update Project</button>
		<label>Status:</label>
		<p>{{ project.complete }}</p>
	</form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Project from '../../types/Project'

export default defineComponent({
  props: ['id'],
  setup() {
    const project = ref<Project>({
      id: 0,
      title: '',
      details: '',
      complete: false
    })

    const uri = ref<string>('http://localhost:3000/projects/')

    return { project, uri }
  },
  mounted() {
    fetch(this.uri + this.id)
      .then(res => res.json() as Promise<Project>)
      .then(data => {
        console.log('project:' + JSON.stringify(data))
        this.project = data
      })
      .catch(err => console.log(err))

    
  },
  methods: {
    handleSubmit() {
      fetch(this.uri + this.id, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(this.project)
      })
      .then(() => {
        this.$router.push('/')
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

})
</script>

<style scoped></style>
