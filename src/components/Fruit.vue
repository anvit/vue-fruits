<template>
    <li v-if="item.qty > 0" class="fruit">
        <div class="fruit-name">
            {{ item.emoji }}
        </div>
        <div class="fruit-footer">
            <span v-bind:class="[ item.qty <= 2 ? 'lowStock' : 'highStock']" class="fruit-qty">
                Stock: {{ item.qty }}
            </span>
            <span class="fruit-button">
                <button v-on:click="$emit('add-item', item)">Add to Cart</button>
            </span>
        </div>
    </li>
</template>

<script>
export default {
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
    font-size: 56px;
    padding: 72px;
    border-bottom: 2px solid rgba(220, 20, 0, 0.25 )
}

.fruit-footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    margin: 10px 0;
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
</style>