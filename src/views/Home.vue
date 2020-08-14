<template>
    <div class="app">
        <div class="container">
            <section class="welcome">
                <welcome v-bind:name='user'></welcome>
                <div class="cart" v-if="cart.length > 0">
                    <span class="cart-icon">🛒</span>
                    <span> {{ cart.length }} </span>
                </div>
            </section>
            <ul class="fruit-list">
                <fruit v-for="fruit in fruits" v-bind:item='fruit' v-on:add-item="addToCart" v-bind:key="fruit.id"></fruit>
            </ul>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import Fruit from '@/components/Fruit.vue'

export default {
    name: 'Home',
    components: {
        Welcome,
        Fruit
    },
    data () {
        return {
            user: 'Anvit',
            fruits: [
                { id: 0, name: 'banana', qty: 6, emoji: '🍌' },
                { id: 1, name: 'cherry', qty: 3, emoji: '🍒' },
                { id: 2, name: 'orange', qty: 4, emoji: '🍊' },
                { id: 3, name: 'apple', qty: 7, emoji: '🍎' },
                { id: 4, name: 'pear', qty: 3, emoji: '🍐' },
                { id: 5, name: 'coconut', qty: 5, emoji: '🥥' }
            ],
            cart: []
        }
    },
    methods: {
        addToCart: function (fruit) {
            const fruitIndex = this.fruits.indexOf(fruit);

            if (fruitIndex || fruitIndex === 0) {
                this.cart.push(fruit);
                this.fruits[fruitIndex].qty--;
            }
        }
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: sans-serif;
    line-height: 1;
}

ul {
    list-style: none;
}

.app {
    display: flex;
    align-items: center;
    justify-content: center;
}

.welcome {
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 300px;
    padding: 10px;
}

.cart {
    margin-left: 20px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.fruit-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 50px;
}
</style>
