<template>
  <label v-if="label" :for="label">{{ label }}</label>
  <input
    :type="type || 'text'"
    :v-model="data"
    :placeholder="placeholder || ''"
    :min="min"
    :max="max"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: ['type', 'placeholder', 'label', 'data', 'min', 'max'],
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}
input {
  width: 100%;
  padding: 0.7em 1em;
  font-size: 0.875rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
}
</style>
