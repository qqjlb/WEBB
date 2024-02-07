<template>
  <div class="main">
    <AppLayout />
    <div class="headContent">
      <AppHeader />
      <div>-----</div>
      <slot></slot>
    </div>
  </div>
  
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.main{
  width: 100%;
  display: flex;
  .headContent{
    width: 100%;
  }
}
</style>