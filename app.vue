<template>
  <div >
    <div class="app_navigation">
      <input type="checkbox" v-model="checkedValue" value="checkedValue"/>
      <div  class="app_navigation_lab" v-show="checkedValue">
        <NuxtLink to="/">break</NuxtLink>
        <br/>
        <NuxtLink to="/detail">detail</NuxtLink>
        <br/>
        <NuxtLink to="/user-admin/1">user-1</NuxtLink>
        <br/>
        <NuxtLink to="/parent/child">parent/child</NuxtLink>
      </div>
    </div>
    
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>
<script setup>
// import '@/assets/css/main.css'
import {ref} from "vue";

const checkedValue = ref(false)


</script>
<style lang="scss" scoped>
  .app_navigation{
    position: absolute;
    background: rgb(228, 228, 228);
  }
  .app_navigation_lab{

    border: 1px solid #665;
  }
</style>