<template>
  <AuthLayout>
    <template v-slot:form>
      <form @submit="handleSubmit">
        <div>
          <h1>Log in</h1>
          <p class="subtitle">Log in to your account</p>
        </div>

        <div class="inputs-container">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
          />
          <input type="password" v-model="password" placeholder="*****" />
        </div>

        <div class="buttons-container">
          <a href="#">Forgot password?</a>

          <button class="submit-button">
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
            Don’t have an account yet?
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

export default {
  name: 'Login',
  components: { AuthLayout, GoogleIcon, LinkedinIcon },
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault()
      if (this.email.trim()) alert(this.email)
    },
  },
}
</script>

<style></style>
