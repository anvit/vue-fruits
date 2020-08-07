
const app = new Vue({
    el: '#app',
    data: {
        user: 'Anvit',
        fruits: [
            {name: 'banana', qty: 6, emoji: '🍌'},
            {name: 'cherry', qty: 3, emoji: '🍒'},
            {name: 'orange', qty: 4, emoji: '🍊'},
        ]
    },
    methods: {
        addToCart: function(fruit) {
            const fruitIndex = this.fruits.indexOf(fruit);

            if (fruitIndex || fruitIndex === 0) {
                console.log(this.fruits[fruitIndex]);
                this.fruits[fruitIndex].qty--;
            }
        }
    }
});