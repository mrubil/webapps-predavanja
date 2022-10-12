<template>
  <nav>
    <!-- Just an image -->

    <router-link to="/">First Page</router-link> |
    <router-link to="/SecondPage">Second Page</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #0080ff;

  background: linear-gradient(45deg, rgb(141, 177, 235), rgb(247, 130, 196));
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #0080ff;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
