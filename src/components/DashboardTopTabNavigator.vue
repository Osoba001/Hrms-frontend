<template>
  <div class="tabs-container">
    <ul>
      <router-link to="/bio">
        <li :class="{ active: $route.path === '/bio' }">
          <a>Bio details</a>
        </li>
      </router-link>
      <router-link to="/job">
        <li :class="{ active: $route.path === '/job' }">
          <a>Job details</a>
        </li>
      </router-link>
      <router-link to="/employment-history">
        <li :class="{ active: $route.path === '/employment-history' }">
          <a>Employment History</a>
        </li>
      </router-link>
      <router-link to="/certifications">
        <li :class="{ active: $route.path === '/certifications' }">
          <a>Certifications</a>
        </li>
      </router-link>
      <router-link to="/confirmation">
        <li :class="{ active: $route.path === '/confirmation' }">
          <a>Confirmation</a>
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashboardTopTabNavigator',
}
</script>

<style>
.tabs-container::-webkit-scrollbar {
  display: none;
}
.tabs-container {
  position: absolute;
  left: 0;
  right: 0;
  top: 55px;
  overflow-x: auto;
  z-index: 1;
  margin-bottom: 5px;
  border-bottom-left-radius: 0.5rem;
  width: 100%;
  background-color: #fff;
  padding-block: 3px;
  border-bottom: 3px solid #eee;
}
.section-title {
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  color: #ca1310;
}
.tabs-container ul {
  display: flex;
  list-style: none;
  gap: 1rem;
}
.tabs-container li {
  cursor: pointer;
  white-space: nowrap;
  padding: 0.7rem 1.5rem;
  border-radius: 6px;
  transition: background-color 500ms ease;
}
.tabs-container li.active {
  background: #192041;
}
.tabs-container li a {
  transition: color 500ms ease;
}
.tabs-container li.active a {
  color: #fff;
}
.tabs-container li:hover {
  background: #192041;
}
.tabs-container li:hover a {
  color: #fff;
}
</style>
