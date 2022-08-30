<template>
  <label v-if="label" :for="label">{{ label }}</label>
  <input
    :type="type || 'text'"
    :placeholder="placeholder || ''"
    :min="min"
    :max="max"
    v-model="inputValue"
    @focus="handleClearInputOnFocus"
    @input="$emit('update-value', inputValue)"
    :required="required"
  />
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    min: {
      type: String,
    },
    max: {
      type: String,
    },
    clearOnFocus: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    handleClearInputOnFocus() {
      if (this.clearOnFocus) this.inputValue = ''
    },
  },
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
