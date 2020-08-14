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