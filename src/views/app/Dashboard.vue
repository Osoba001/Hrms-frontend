<template>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="right">
      <header>
        <div class="project-title">
          <h2>CCL Human Resource Management System</h2>

          <div class="logo">
            <img src="@/assets/images/cyphercrescent-logo.svg" />
          </div>

          <button class="create-staff-btn">
            <span class="material-symbols-rounded"> add </span>
            Create staff
          </button>
        </div>

        <DashboardTopTabNavigator />
      </header>

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import DashboardTopTabNavigator from '@/components/DashboardTopTabNavigator.vue'

export default {
  name: 'Dashboard',
  components: { Sidebar, DashboardTopTabNavigator },

  created() {
    // const user = localStorage.getItem('access-token')
    // if (!user) this.$router.push('/login')

    this.$router.push('/bio')
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  background-color: #eee;
  gap: 0.5rem;
}

.right {
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar {
  max-width: 270px;
  width: 20%;
  min-width: 220px;
}

header {
  border-bottom: 3px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 2.5px;
}

header > div {
  padding: 3px;
  background: #fff;
}

header .project-title {
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem;
}

.project-title .create-staff-btn {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.create-staff-btn:hover {
  background-color: #255eb4;
}

.logo img {
  display: none;
  object-fit: contain;
  width: 150px;
}

.project-title h2 {
  font-size: 1.2rem;
  color: #192041;
}

main {
  flex: 1;
  display: flex;
  overflow-y: scroll;
}

main > div.tab-container {
  position: relative;
  margin-top: 55px;
}

@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
  .project-title h2 {
    display: none;
  }
  /* .logo-container {
    flex: 1;
    display: block;
  } */
  .logo img {
    display: block;
  }
}
</style>
