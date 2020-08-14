
Vue.component('welcome', {
    props: ['name'],
    template: '<p>Welcome {{ name }} </p>'
});

Vue.component('fruit', {
    props: ['item'],
    template: `
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
        </li>`
})

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