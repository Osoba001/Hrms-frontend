<template>
  <h1>Home</h1>
</template>

<script>
export default {
  created() {
    const user = localStorage.getItem('access-token')
    if (!user) this.$router.push('/login')
  },
}
</script>

<style></style>
