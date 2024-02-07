<template>
    <div style="height: 100vh;background:#000">
        <!-- <div class="menuLogo">
            <a-button type="primary" style="margin-right: 0.1rem" @click="toggleCollapsed">
                <MenuUnfoldOutlined v-if="state.collapsed" />
                <MenuFoldOutlined v-else />
            </a-button>
            <a-image v-if="!state.collapsed" style="width: 0.84rem;" src="/img/logo.png" :preview="false"/>
        </div>
        
        <a-menu v-model:openKeys="state.openKeys" v-model:selectedKeys="state.selectedKeys" mode="inline" theme="dark"
            :inline-collapsed="state.collapsed" :items="items"></a-menu> -->
    </div>
</template>
<script setup>
import { reactive, watch, h } from 'vue';

</script>
<style lang="scss" scoped>
.menuLogo{
    height: 0.32rem;
    display: flex;
    padding: 0 0.05rem;
    align-items: center;
    margin-bottom: 0.06rem;
}
</style>