
const app = new Vue({
    el: '#app',
    data: {
        user: 'Anvit',
        fruits: [
            {name: 'banana', qty: 6, emoji: '🍌'},
            {name: 'cherry', qty: 3, emoji: '🍒'},
            {name: 'orange', qty: 4, emoji: '🍊'},
        ],
        cart: []
    },
    methods: {
        addToCart: function(fruit) {
            const fruitIndex = this.fruits.indexOf(fruit);

            if (fruitIndex || fruitIndex === 0) {
                this.cart.push(fruit);
                this.fruits[fruitIndex].qty--;
            }
        }
    }
});