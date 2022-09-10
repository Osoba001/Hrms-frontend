<template>
  <AuthLayout>
    <template v-slot:form>
      <form @submit.prevent="loginUser">
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
            name="email"
            @validate="validate('email')"
            :error="errors.email"
          />
          <TextInput
            type="password"
            placeholder="Password"
            @update-value="updateFormPassword"
            :required="true"
            name="password"
            @validate="validate('password')"
            :error="errors.password"
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
            Forgot password?
            <router-link :to="{ name: 'Change Password' }"
              >Click to reset</router-link
            >
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
import { object, string } from 'yup'

const loginFormSchema = object().shape({
  email: string().email().required(),
  password: string().min(6).max(255).required(),
})

export default {
  name: 'Login',
  components: { AuthLayout, GoogleIcon, LinkedinIcon, TextInput },
  data() {
    return {
      form: {
        email: '',
        password: '',
      },
      errors: {
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
    loginUser() {
      loginFormSchema
        .validate(this.form, { abortEarly: false })
        .then(() => {
          this.signIn(this.form)
        })
        .catch((err) => {
          err.inner.forEach((error) => {
            this.errors = { ...this.errors, [error.path]: error.message }
          })
        })
    },
    validate(field) {
      loginFormSchema
        .validateAt(field, this.form)
        .then(() => {
          this.errors[field] = ''
        })
        .catch((err) => {
          this.errors[err.path] = err.message
        })
    },
  },
}
</script>

<style></style>
