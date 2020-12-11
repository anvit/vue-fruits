<template>
    <div class="cart" v-if="cartItems.length > 0">
        <span class="cart-icon">🛒</span>
        <span> {{ cartItems.length }} </span>
    </div>
</template>

<script>
export default {
    name: 'cart',
    props: {
        cartItems: Array
    },
}
</script>

<style lang="scss">
    .cart {
        position: fixed;
        top: 30px;
        right: 20px;
    }
    .cart-icon {
        cursor: pointer;
        background: white;
        padding: 20px;
        border-radius: 50%;
        font-weight: bold;
        border-width: 0;
        font-size: 0.75rem;
    }
</style>
