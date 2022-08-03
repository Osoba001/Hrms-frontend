<template>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar />
    </div>

    <div class="right">
      <DashboardHeader />

      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue'

export default {
  name: 'Dashboard',
  components: {
    Sidebar,
    DashboardHeader,
  },
  methods: {
    displayTab(path) {
      const routesToDisplayTab = [
        '/',
        '/bio',
        '/job',
        '/employment-history',
        '/certifications',
        '/confirmation',
      ]
      return routesToDisplayTab.includes(path)
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
  },

  created() {
    // const user = localStorage.getItem('access-token')
    // if (!user) this.$router.push('/login')
    // this.$router.push('/bio')
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

main {
  flex: 1;
  display: flex;
  overflow-y: auto;
}

main > div.tab-container {
  position: relative;
  margin-top: 55px;
}

@media (max-width: 780px) {
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
