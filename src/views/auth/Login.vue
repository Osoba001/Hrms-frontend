<template>
  <AuthLayout>
    <template v-slot:form>
      <form @submit.prevent="handleSubmit">
        <div>
          <h1>Log in</h1>
          <p class="subtitle">Log in to your account</p>
        </div>

        <div class="inputs-container">
          <TextInput
            type="email"
            placeholder="Enter your email address"
            @update-value="updateFormEmail"
            :required="true"
          />
          <TextInput
            type="password"
            placeholder="Password"
            @update-value="updateFormPassword"
            :required="true"
          />
        </div>

        <div class="buttons-container">
          <a href="#">Forgot password?</a>

          <button type="submit" class="submit-button">
            Next
            <span class="material-symbols-outlined"> arrow_right_alt </span>
          </button>
        </div>

        <span class="divider" />

        <p class="signin-options-title">Or login with</p>

        <div class="signin-options-container">
          <button>
            <LinkedinIcon />
            LinkedIn
          </button>
          <button>
            <GoogleIcon />
            Google
          </button>
        </div>

        <div class="alt-sign-in">
          <p>
            Don't have an account yet?
            <router-link :to="{ path: '/signup' }">Signup</router-link>
          </p>
        </div>
      </form>
    </template>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layout/AuthLayout.vue'
import GoogleIcon from '@/components/icons/GoogleIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import { mapActions } from 'vuex'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'Login',
  components: { AuthLayout, GoogleIcon, LinkedinIcon, TextInput },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapActions('appStore', ['signIn']),
    updateFormEmail(data) {
      this.form.email = data
    },
    updateFormPassword(data) {
      this.form.password = data
    },
    handleSubmit() {
      this.signIn(this.form)
    },
  },
}
</script>

<style></style>
