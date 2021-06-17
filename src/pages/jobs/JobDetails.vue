<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ job.id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Job from '../../types/Job'

export default defineComponent({
  name: 'JobDetails',
  props: ['id'],
  setup() {
    const job = ref<Job>()

    return {job}
  },
  mounted() {
    fetch('http://localhost:3000/jobs/' + this.id)
      .then(res => res.json() as Promise<Job>)
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
  }  
})
</script>

<style>
</style>