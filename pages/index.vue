<template>
  <div class="main_index">
    <button @click="handleMessage">
      button
    </button>
    <h2 style="fontSize:0.16rem">{{ num.count }}</h2>
  </div>
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
  .main_index{
    border: 1px solid #000;
    background: rgb(177, 177, 177);
  }
</style>