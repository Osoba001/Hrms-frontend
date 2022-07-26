<template>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="right">
      <header>
        <div class="project-title">
          <h2>CCL Human Resource Management System</h2>
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
  },
}
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  font-family: 'Lato', sans-serif;
  background-color: #eee;
  gap: 3px;
}

.right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.sidebar {
  flex: 0.3;
  max-width: 270px;
  min-width: 200px;
}

header {
  border-bottom: 3px solid #eee;
  display: flex;
  flex-direction: column;
  gap: 2.5px;
}

header > div {
  padding-inline: 3px;
  background: #fff;
}

header.project-title {
  display: flex;
  align-items: center;
}

header .project-title h2 {
  font-size: 1.2rem;
  padding: 0.5rem 1.5rem;
}

main {
  flex: 1;
  display: flex;
  padding: 1rem;
}
</style>
