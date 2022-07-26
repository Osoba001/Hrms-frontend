<template>
  <div class="tabs">
    <ul>
      <router-link to="/bio">
        <li>
          <a>Bio details</a>
        </li>
      </router-link>
      <router-link to="/job">
        <li>
          <a>Job details</a>
        </li>
      </router-link>
      <router-link to="/employment-history">
        <li>
          <a>Employment History</a>
        </li>
      </router-link>
      <router-link to="/certifications">
        <li>
          <a>Certifications</a>
        </li>
      </router-link>
      <router-link to="/confirmation">
        <li>
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

<style scoped>
.tabs ul {
  display: flex;
  list-style: none;
  height: 100%;
  padding-block: 3px;
  gap: 1.5rem;
}
.tabs li {
  flex: 1;
  display: grid;
  place-items: center;
  text-align: center;
  cursor: pointer;
  white-space: nowrap;
  padding: 0.7rem 1.5rem;
}
.tabs li:hover {
  background: #eee;
}
</style>
