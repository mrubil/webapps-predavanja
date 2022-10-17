<template>
  <!-- Just an image -->
  <div id="app">
    <nav>
      <router-link to="/" style="text-decoration: none"> Početna </router-link>
      <router-link to="/SecondPage" style="text-decoration: none"
        >Druga
      </router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(0, 0, 0);
}

nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: rgb(0, 0, 0);
}
nav a.router-link-exact-active {
  color: rgb(0, 0, 0);
}
</style>
