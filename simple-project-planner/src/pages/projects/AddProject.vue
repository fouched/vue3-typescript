<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="project.title" required>
    <label></label>
    <textarea v-model="project.details" required></textarea>
    <button>Add Project</button>
  </form>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Project from '../../types/Project'

export default defineComponent({
name: 'AddProject',
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
methods: {
  handleSubmit() {
    const p = {
      title: this.project.title,
      details: this.project.details,
      complete: this.project.complete
    }

    fetch(this.uri, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(p)
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

<style scoped>
</style>