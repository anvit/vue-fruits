<template>
    <p>Welcome {{ name }}</p>
</template>

<script>
export default {
    props: {
        name: String,
    }
}
</script>

<style lang="scss" scoped>
    p {
        font-size: 1.25rem;
    }
</style>