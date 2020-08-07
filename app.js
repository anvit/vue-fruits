
const app = new Vue({
    el: '#app',
    data: {
        user: 'Anvit',
        fruits: [
            {name: 'banana', qty: 6, emoji: '🍌'},
            {name: 'cherry', qty: 0, emoji: '🍒'},
            {name: 'orange', qty: 4, emoji: '🍊'},
        ]
    },
    methods: {
        displayName: function() {
            console.log(this.user);
        }
    }
});