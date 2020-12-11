<template>
        <ul class="fruit-list">
            <fruit v-for="fruit in fruits" v-bind:item='fruit' v-on:add-item="(item) => $emit('add-item', item)" v-bind:key="fruit.id"></fruit>
        </ul>
</template>

<script>
import fruit from '@/components/Fruit.vue';

export default {
    name: 'fruitlist',
    props: {
        fruits: Array
    },
     components: {
         fruit
    },
}
</script>

<style lang="scss">

.fruit-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 50px;
    padding: 0;
}
</style>