<template>
  <a-button @click="handleMessage">
    button
  </a-button>
  <h2 style="fontSize:0.16rem">{{ num.count }}</h2>
</template>

<script setup>
import { counteStore } from '@/stores/counter'
const router = useRouter()

const num = counteStore()
const handleMessage = () => {
  num.count++
  // router.push('/about')
}

</script>

<style>

</style>