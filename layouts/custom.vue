<template>
    <div class="custom">
        内容来自custom.vue
        <slot name="title"/>
        <slot name="content"/>
    </div>
</template>

<style scoped>
    .custom{
        border: 1px solid #931;
        background: rgb(208, 247, 208);
    }
</style>