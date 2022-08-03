<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style>
.modal {
  width: 100%;
  max-width: 450px;
  min-height: 300px;
  padding: 1rem;
  margin: 100px auto;
  background: white;
  border-radius: 6px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 3;
}
</style>
