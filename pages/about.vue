<template>
    <div menu="show">
        <menu>
            <div @click="testhandle">lable1</div>
            <div @click="testhandle" class="red">lable2</div>
            <div @click="testhandle">lable3</div>
        </menu>
        <h1>this is about</h1>

        <button @click="testhandle">open</button>
        <div class="test_area" menu="show">
            <menu>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
                <div @click="testhandle">testxxxxxxxx</div>
            </menu>
        </div>
    </div>
</template>

<script setup>

const testhandle = ()=>{
    console.log("hello",data);
}

const data = {a:"a"}
    
</script>

<style lang="scss" scoped>
.test_area{
    height: 200px;
    width: 400px;
    background: #634;
}
.red{
    background: red;
}
</style>