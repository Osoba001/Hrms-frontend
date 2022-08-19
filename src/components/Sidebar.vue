<template>
  <aside>
    <header>
      <div class="user-info">
        <div class="user-img">
          <img
            src="https://randomuser.me/api/portraits/thumb/men/75.jpg"
            alt="user"
          />
        </div>
        <div class="user-detail">
          <h2>John Michael</h2>
          <p v-if="accountType === 'admin'">Admin</p>
          <p v-if="accountType === 'manager'">Manager</p>
          <p v-if="accountType === 'staff'">Staff</p>
          <p v-if="accountType === 'HR'">Human Resource</p>
        </div>
      </div>
    </header>
    <div class="items">
      <router-link to="/dashboard">
        <div class="item" v-if="accountType !== 'admin'">
          <span
            class="active-bar"
            :class="{
              active:
                $route.path === '/' ||
                $route.path === '/bio' ||
                $route.path === '/job' ||
                $route.path === '/employment-history' ||
                $route.path === '/certifications' ||
                $route.path === '/confirmation' ||
                $route.path === '/dashboard',
            }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> dashboard </span>
          </div>
          <span>Dashboard</span>
        </div>
      </router-link>

      <router-link to="/employees">
        <div
          class="item"
          v-if="accountType === 'admin' || accountType === 'HR'"
        >
          <span
            class="active-bar"
            :class="{ active: $route.path === '/employees' }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> badge </span>
          </div>
          <span>Employees</span>
        </div>
      </router-link>

      <router-link to="/projects">
        <div
          class="item"
          v-if="accountType === 'staff' || accountType === 'manager'"
        >
          <span
            class="active-bar"
            :class="{ active: $route.path === '/projects' }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> sticky_note_2 </span>
          </div>
          <span>Projects</span>
        </div>
      </router-link>

      <router-link to="/department">
        <div class="item" v-if="accountType === 'admin'">
          <span
            class="active-bar"
            :class="{ active: $route.path === '/department' }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> apartment </span>
          </div>
          <span>Departments</span>
        </div>
      </router-link>

      <router-link to="/leave">
        <div
          class="item"
          v-if="accountType === 'staff' || accountType === 'manager'"
        >
          <span
            class="active-bar"
            :class="{
              active:
                $route.path === '/leave' ||
                $route.path === '/leave/team-members',
            }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> handshake </span>
          </div>
          <span>Leave</span>
        </div>
      </router-link>
    </div>

    <div class="logo-container">
      <CypherCrescentLogo />
    </div>
  </aside>
</template>

<script>
import { account_type } from '@/data'
import CypherCrescentLogo from './icons/CypherCrescentLogo.vue'

export default {
  name: 'Sidebar',
  components: { CypherCrescentLogo },
  data() {
    return {
      accountType: account_type,
    }
  },
}
</script>

<style scoped>
main {
  color: #383838;
}
aside {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2px;
  background-color: #192041;
  color: #e4e8f1;
}

header {
  width: 100%;
  display: flex;
  padding-inline: 1.5rem;
  height: 80px;
  border-bottom: 1px solid #5164be;
}

header .user-info {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

header .user-info .user-img {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
}

header .user-info .user-img img {
  width: 100%;
  height: 100%;
}

header .user-info h2 {
  font-size: 1rem;
  color: #f5f5f5;
}

header .user-info p {
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.705);
}

.items {
  padding-top: 1rem;
  flex: 1;
}

.items .item {
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.7rem;
  margin-bottom: 0.5rem;
  transition: background-color 500ms ease;
  color: #e4e8f1;
}

.item .active-bar {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #ca1310;
  width: 4px;
}

.item .active-bar.active {
  display: block;
}

.item:hover {
  background-color: #28398d;
}

.item .icon {
  width: 25px;
  height: 25px;
}

.logo-container {
  padding: 1.5rem;
}
</style>
