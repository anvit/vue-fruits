<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #282c34;
  color: white;
  text-align: center;
  min-height: 100vh;
}

#nav {
  padding: 30px;
  a {
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    background: white;
    font-weight: bold;
    color: rgb(58, 52, 95);
    margin: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
