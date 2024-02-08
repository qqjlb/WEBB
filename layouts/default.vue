<template>
  <div class="main">
    <AppLayout />
    <div class="headContent">
      <div class="app_navigation_btn" @click="switchNav">
      </div>
      <div class="app_navigation" v-show="navStore.visNav">
        <div class="app_navigation_lab"  @click="switchNav">
          <div class="app_navigation_content">
            <NuxtLink v-for="item in navStore.navList" :to="item.path">{{ item.name }}</NuxtLink>
          </div>
        </div>
      </div>
      <!-- <AppHeader /> -->
      <!-- <a>---navigation---</a> -->
      <slot></slot>
    </div>
  </div>
  
</template>

<script lang="ts" setup>
import {useNavStore} from "../stores/navigation";
const navStore = useNavStore();

const switchNav = ()=>{
  navStore.changeVisNav();
}

</script>

<style lang="scss" scoped>
.main{
  width: 100%;
  display: flex;
  .headContent{
    width: 100%;
    
  }
}

.app_navigation_btn{
  width: 20PX; 
  height: 20px;
  border-radius: 50%;
  background: rgb(59, 85, 105);
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
}
.app_navigation{
  position: absolute;
  background: transparent;
  width: 100vw;
  height: 100vh;
  .app_navigation_lab{
    width: 100%;
    height: 100vh;
    // border: 1px solid #665;
  }
  .app_navigation_content{
    background: #667;
    max-width: 300px;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    padding-left: 20px;
    
  }
  .app_navigation_content a::after, .app_navigation_content a::before{
    position: absolute;
    left: 0px;
    width: 100%;
    height: 2px;
    background: #FFF;
    content: "";
    opacity: 0;
    transition: all 0.3s;
  }
  .app_navigation_content a:hover::after,.app_navigation_content a:hover::before{
    opacity: 1;
    transform: translateY(0px);
  }
  .app_navigation_content a::after{
    bottom: 0px;
    transform: translateY(-10px);
  }
  .app_navigation_content a::before{
    top: 0px;
    transform: translateY(10px);
  }
  
  .app_navigation_content a{
    color: white;
    font-size: 24px;
    position: relative;
    z-index: 0;
    cursor: pointer;
  }
}

</style>