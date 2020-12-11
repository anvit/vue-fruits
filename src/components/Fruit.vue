<template>
    <li v-if="item.qty > 0" class="card">
        <div class="fruit-name">
            {{ item.emoji }}
        </div>
        <div class="fruit-footer" v-on:click="$emit('add-item', item)">
            <span v-bind:class="[ item.qty <= 2 ? 'lowStock' : 'highStock']" class="fruit-qty">
                In stock: {{ item.qty }}
            </span>
        </div>
    </li>
</template>

<script>
export default {
    name: 'fruit',
    props: {
        item: Object
    }
}
</script>

<style lang="scss" scoped>

.fruit {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 3px 4px 0px rgba(0, 0, 0, .35);
    margin: 40px 0;
}

.fruit-name {
    font-size: 5rem;
    padding: 48px;
}

.fruit-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    font-weight: 600;
    background-color: crimson;
    color: blanchedalmond;
    border-radius: 0 0 5px 5px;
}

.fruit-qty.lowStock {
    color: tomato;
}

.fruit-button button {
    font-size: 16px;
    border: 0;
    background-color: mediumslateblue;
    padding: 10px;
    border-radius: 3px;
    color: white;
    cursor: pointer;
}

.fruit-button button:hover {
    background-color: mediumpurple;
}

.fruit-button button:active {
    background-color: darkslateblue;
}

.card {
    background: white;
    border-radius: 5px;
    cursor: pointer;
}
</style>