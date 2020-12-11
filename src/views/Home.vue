<template>
    <div class="app">
        <div class="container">
            <h1>Nook's Cranny</h1>
            <section class="welcome">
                <welcome v-bind:name='user'></welcome>
                <cart v-bind:cartItems="cartItems"></cart>
            </section>
            <fruitList  v-bind:fruits="fruits" v-on:add-item="addToCart"></fruitList>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'
import FruitList from '@/components/FruitList.vue'
import Cart from '@/components/Cart.vue'

export default {
    name: 'Home',
    components: {
        Welcome,
        FruitList,
        Cart
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
            cartItems: []
        }
    },
    methods: {
        addToCart: function (fruit) {
            console.log(fruit);
            const fruitIndex = this.fruits.indexOf(fruit);

            if (fruitIndex || fruitIndex === 0) {
                this.cartItems.push(fruit);
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
  text-align: center;
  background-color: #282c34;
  color: white;
}

.welcome {
    font-size: 18px;
    display: flex;
    justify-content: center;
    width: 300px;
    padding: 10px;
    margin:50px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

</style>
