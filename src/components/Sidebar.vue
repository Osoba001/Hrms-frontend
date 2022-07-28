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
          <p>Admin</p>
        </div>
      </div>
    </header>
    <div class="items">
      <div class="item">
        <div class="icon">
          <span class="material-symbols-outlined"> dashboard </span>
        </div>
        <span>Dashboard</span>
      </div>
      <div class="item">
        <div class="icon">
          <span class="material-symbols-outlined"> sticky_note_2 </span>
        </div>
        <span>Projects</span>
      </div>
      <div class="item">
        <div class="icon">
          <span class="material-symbols-outlined"> apartment </span>
        </div>
        <span>Department</span>
      </div>
      <div class="item">
        <div class="icon">
          <span class="material-symbols-outlined"> handshake </span>
        </div>
        <span>Leave</span>
      </div>
      <div class="item">
        <div class="icon">
          <span class="material-symbols-outlined"> account_circle </span>
        </div>
        <span>Personal info</span>
      </div>
    </div>

    <div class="logo-container">
      <CypherCrescentLogo />
    </div>
  </aside>
</template>

<script>
import CypherCrescentLogo from './icons/CypherCrescentLogo.vue'

export default {
  name: 'Sidebar',
  components: { CypherCrescentLogo },
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
  cursor: pointer;
}

.items .item {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 1rem 1.7rem;
  margin-block: 0.5rem;
  transition: background-color 500ms ease;
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
