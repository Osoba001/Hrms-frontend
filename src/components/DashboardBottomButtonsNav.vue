<template>
  <div class="buttons-container">
    <button @click="$router.push(backRoute)" v-if="backRoute" class="nav-btn">
      Back
    </button>
    <button @click="$router.push(nextRoute)" v-if="nextRoute" class="nav-btn">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'DashboardBottomButtonsNav',
  props: ['backRoute', 'nextRoute'],
}
</script>

<style scoped>
.buttons-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 1rem;
  padding: 1.5rem;
}

.nav-btn {
  padding: 0.7em 1.5em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.nav-btn:hover {
  background-color: #255eb4;
}
</style>
