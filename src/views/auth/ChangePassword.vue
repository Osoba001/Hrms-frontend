<template>
  <AuthLayout>
    <template v-slot:form>
      <form @submit.prevent="handleSubmit">
        <div>
          <h1>Change password</h1>
          <p class="subtitle">You can change your current password here</p>
        </div>

        <div class="inputs-container">
          <TextInput
            label="Current password"
            type="password"
            placeholder="*******"
          />
          <TextInput
            label="New password"
            type="password"
            placeholder="*******"
          />
          <TextInput
            label="Confirm new password"
            type="password"
            placeholder="*******"
          />
        </div>

        <button class="submit-button">Change</button>

        <br />
      </form>
    </template>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layout/AuthLayout.vue'
import TextInput from '@/components/TextInput.vue'
export default { components: { AuthLayout, TextInput } }
</script>

<style></style>
