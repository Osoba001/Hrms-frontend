<template>
  <div class="container">
    <lottie :options="defaultOptions" :height="40" :width="40" />
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
