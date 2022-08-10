<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal">
      <slot />
      <div class="back" @click="closeModal">
        <span class="material-symbols-outlined"> arrow_forward_ios </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['isModalActive'],
  methods: {
    closeModal() {
      this.$emit('close')
    },
  },
}
</script>

<style>
@keyframes fadeBackdrop {
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 3;
  transform: translateX(100%);
  animation: fadeBackdrop 300ms forwards;
}

@keyframes animateModal {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

.modal {
  position: relative;
  width: 100%;
  height: 100%;
  width: 100%;
  max-width: 550px;
  padding: 2rem;
  background: white;
  border-radius: 6px;
  display: flex;
  margin-left: auto;
  transform: translateX(100%);
  animation: animateModal 500ms forwards;
}

.back {
  position: absolute;
  top: 50%;
  left: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  transform: translateX(-40%);
  border-radius: 50%;
  cursor: pointer;
}

.back span {
  font-size: 1rem;
  margin-left: 0.4rem;
}

@media (max-width: 580px) {
  .modal {
    padding: 1rem;
  }
  .back {
    justify-content: center;
    top: 1rem;
    left: 1rem;
    transform: translateX(0);
    box-shadow: 0 0 3px 3px rgba(127, 127, 127, 0.3);
  }
  .back span {
    margin-left: 0;
  }
}
</style>
