<template>
  <div id="app">
    <p>
      Тестовое задание для
      <a
        href="https://bolshayastrana.com/"
        class="text-decoration-none"
      >
        bolshayastrana.com
      </a>
    </p>

    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
</style>
