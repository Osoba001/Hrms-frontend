<template>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
}
body {
  font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
}
button {
  font-family: 'Lato', Avenir, Helvetica, Arial, sans-serif;
  border: 0;
}
a {
  text-decoration: none;
  color: #000;
}
*::-webkit-scrollbar {
  width: 12px;
}
*::-webkit-scrollbar-thumb {
  background-color: rgb(160, 160, 160);
  border-radius: 8px;
  border: 2px solid #eee;
}
*::-webkit-scrollbar-thumb:hover {
  background-color: rgb(124, 124, 124);
}
</style>
