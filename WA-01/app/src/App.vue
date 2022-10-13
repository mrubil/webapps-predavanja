<template>
  <nav>
    <!-- Just an image -->
    <div>
      <router-link to="/" style="text-decoration: none"> Početna </router-link>
    </div>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: rgb(255, 255, 255);

  background: linear-gradient(45deg, rgb(0, 98, 255), rgb(183, 172, 239));
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: rgb(255, 255, 255);

    &.router-link-exact-active {
      color: rgb(242, 242, 255);
    }
  }
}
</style>
