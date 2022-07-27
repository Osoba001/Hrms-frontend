<template>
  <AuthLayout>
    <template v-slot:form>
      <form @submit="handleSubmit">
        <div>
          <h1>Admin</h1>
          <p class="subtitle">Log in to your administrative account</p>
        </div>

        <div class="inputs-container">
          <input
            type="text"
            v-model="username"
            placeholder="Enter your username"
          />
          <input type="password" v-model="password" placeholder="********" />
        </div>

        <div class="buttons-container">
          <a href="#">Reset password?</a>

          <button class="submit-button">
            Configure
            <span class="material-symbols-outlined"> arrow_right_alt </span>
          </button>
        </div>

        <div class="active-directory">
          <h2>Use active directory</h2>

          <div class="radio-btn-container">
            <input type="radio" id="yes"  name="active_directory" value="yes" />
            <label for="yes">Yes</label><br />
          </div>
          <div class="radio-btn-container">
            <input type="radio" id="no"  name="active_directory" value="no" />
            <label for="no">No</label><br />
          </div>
        </div>

        <div class="flex-space" />
      </form>
    </template>
  </AuthLayout>
</template>

<script>
import AuthLayout from "@/components/layout/AuthLayout.vue";
export default {
  name: "Admin",
  components: { AuthLayout },
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style></style>
