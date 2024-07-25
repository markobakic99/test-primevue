<template>
  <div id="app">
    <h1>PRIMEVUE</h1>
    <nav>
      <router-link to="/">First Page</router-link>
      <router-link to="/second">Second Page</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
nav {
  display: flex;
  gap: 10px;
}

router-link {
  text-decoration: none;
  color: blue;
}

router-link-active {
  font-weight: bold;
}
</style>