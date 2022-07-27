<template>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="right">
      <header>
        <div class="project-title">
          <h2>CCL Human Resource Management System</h2>

          <button class="create-staff-btn">Create staff</button>
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

header .project-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1.5rem;
}

.project-title .create-staff-btn {
  padding: 0.7em 1em;
  background-color: rgb(0, 94, 255);
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
}
.create-staff-btn:hover {
  background-color: rgba(0, 94, 255, 0.85);

}

.project-title h2 {
  font-size: 1.2rem;
}

main {
  flex: 1;
  display: flex;
  padding: 1rem;
}
</style>
