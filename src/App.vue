<template>
  <div id="app">
    <p class="title">
      Тестовое задание.
    </p>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  justify-content: center;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.title {
  max-width: 50%;
  margin: 0 auto;
}
</style>
