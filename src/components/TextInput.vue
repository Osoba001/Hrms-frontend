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
    @blur="$emit('validate')"
    @keypress="$emit('validate')"
    :class="{ error: !!error }"
    :readonly="readonly"
  />
  <!-- <p class="form-input-hint" v-if="error">{{ error }}</p> -->
</template>

<script>
export default {
  name: "TextInput",
  props: {
    type: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
      default: "",
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
    error: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
    };
  },
  methods: {
    handleClearInputOnFocus() {
      if (this.clearOnFocus) this.inputValue = "";
    },
  },
};
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
  font-family: "Lato", Helvetica, sans-serif;
}
input:focus {
  outline: none;
  border-color: #9ecaed;
  box-shadow: 0 0 5px #9ecaed;
}

input.error {
  border: 1px solid rgb(220, 43, 43);
}
input.error:focus {
  box-shadow: 0 0 5px rgba(255, 0, 0, 0.609);
}
.form-input-hint {
  color: red;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  margin-left: auto;
  width: fit-content;
}
</style>
