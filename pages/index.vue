<template>
  <div class="main_index">
    <p>this is main page</p>
    <button @click="handleMessage">
      button
    </button>
    
  </div>
</template>

<script setup>

const handleMessage = () => {
 
}

</script>

<style>
  .main_index{
    border: 1px solid #000;
    background: rgb(177, 177, 177);
  }
</style>