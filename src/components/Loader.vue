<template>
  <div class="container">
    <lottie :options="defaultOptions" :height="50" :width="50" />
  </div>
</template>

<script>
import Lottie from 'vue-lottie'
import animationData from '@/assets/animations/loader'

export default {
  components: {
    Lottie,
  },
  data() {
    return {
      defaultOptions: { animationData, loop: true },
      animationSpeed: 1,
    }
  },
}
</script>

<style scoped>
.container {
  display: grid;
  place-items: center;
  flex: 1;
}
</style>
