<template>
  <aside>
    <header>
      <div class="user-info" @click="toggleModal">
        <div class="user-img">
          <img v-bind:src="user.image" alt="user" />
        </div>
        <div class="user-detail">
          <h2 v-if="user.accountType !== ACCOUNT_TYPES.admin && user.firstName">
            {{ `${user.firstName} ${user.surname}` }}
          </h2>
          <h2 v-else>Welcome</h2>
          <p v-if="user.accountType === ACCOUNT_TYPES.admin">Admin</p>
          <p v-if="user.accountType === ACCOUNT_TYPES.manager">Manager</p>
          <p v-if="user.accountType === ACCOUNT_TYPES.staff">Staff</p>
          <p v-if="user.accountType === ACCOUNT_TYPES.HR">Human Resource</p>
        </div>
      </div>
    </header>
    <div class="items">
      <!-- Home -->
      <router-link
        :to="{
          name:
            user.accountType === ACCOUNT_TYPES.HR
              ? 'HR Dashboard'
              : 'Staff Dashboard',
        }"
      >
        <div class="item" v-if="user.accountType !== ACCOUNT_TYPES.admin">
          <span
            class="active-bar"
            :class="{
              active:
                $route.name === ROUTES.home ||
                $route.name === ROUTES.staffDashboard ||
                $route.name === ROUTES.hrDashboard,
            }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> dashboard </span>
          </div>
          <span>Dashboard</span>
        </div>
      </router-link>

      <!-- Employees -->
      <router-link :to="{ name: 'Employees' }">
        <div
          class="item"
          v-if="
            user.accountType === ACCOUNT_TYPES.admin ||
            user.accountType === ACCOUNT_TYPES.HR
          "
        >
          <span
            class="active-bar"
            :class="{ active: $route.name === ROUTES.employees }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> badge </span>
          </div>
          <span>Employees</span>
        </div>
      </router-link>

      <!-- Projects -->
      <router-link :to="{ name: 'Projects' }">
        <div
          class="item"
          v-if="
            user.accountType === ACCOUNT_TYPES.staff ||
            user.accountType === ACCOUNT_TYPES.manager
          "
        >
          <span
            class="active-bar"
            :class="{ active: $route.name === ROUTES.projects }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> sticky_note_2 </span>
          </div>
          <span>Projects</span>
        </div>
      </router-link>

      <!-- Departments -->
      <router-link :to="{ name: 'Departments' }">
        <div class="item" v-if="user.accountType === ACCOUNT_TYPES.admin">
          <span
            class="active-bar"
            :class="{ active: $route.name === ROUTES.departments }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> apartment </span>
          </div>
          <span>Departments</span>
        </div>
      </router-link>

      <!-- Leave -->
      <router-link :to="{ name: 'Leave' }">
        <div
          class="item"
          v-if="
            user.accountType === ACCOUNT_TYPES.staff ||
            user.accountType === ACCOUNT_TYPES.manager ||
            user.accountType === ACCOUNT_TYPES.HR
          "
        >
          <span
            class="active-bar"
            :class="{
              active:
                $route.name === ROUTES.leave ||
                $route.name === ROUTES.viewTeamLeaveInfo ||
                $route.name === ROUTES.hrLeave,
            }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> handshake </span>
          </div>
          <span>Leave</span>
        </div>
      </router-link>

      <!-- User info -->
      <router-link :to="{ name: ROUTES.userInfo }">
        <div
          class="item"
          v-if="
            user.accountType === ACCOUNT_TYPES.staff ||
            user.accountType === ACCOUNT_TYPES.manager
          "
        >
          <span
            class="active-bar"
            :class="{
              active:
                $route.name === ROUTES.userInfo ||
                $route.name === ROUTES.bio ||
                $route.name === ROUTES.job ||
                $route.name === ROUTES.employmentHistory ||
                $route.name === ROUTES.certifications ||
                $route.name === ROUTES.confirmation,
            }"
          />
          <div class="icon">
            <span class="material-symbols-outlined"> person </span>
          </div>
          <span>My info</span>
        </div>
      </router-link>
    </div>

    <div class="logout-container">
      <button class="logout-btn" @click="handleSignOut">
        <span class="material-symbols-outlined"> logout </span>
        Logout
      </button>
    </div>

    <div class="logo-container">
      <CypherCrescentLogo />
    </div>
  </aside>

  <teleport to=".modals" v-if="showModal">
    <EmployeeModalInfo :toggleModal="toggleModal" :isCurrentUser="true" />
  </teleport>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CypherCrescentLogo from "./icons/CypherCrescentLogo.vue";
import EmployeeModalInfo from "./EmployeeModalInfo.vue";
import { ACCOUNT_TYPES } from "@/global/accountTypes";
import { ROUTES } from "@/global/routes";

export default {
  name: "Sidebar",
  components: { CypherCrescentLogo, EmployeeModalInfo },
  computed: {
    ...mapState("appStore", ["user"]),
  },
  data() {
    return {
      showModal: false,
      ACCOUNT_TYPES,
      ROUTES,
    };
  },
  methods: {
    ...mapActions("appStore", ["signOut"]),
    toggleModal() {
      this.showModal = !this.showModal;
      console.log(this.user);
    },
    handleSignOut() {
      this.signOut().then(() => {
        this.$router.replace({ name: ROUTES.login });
      });
    },
  },
};
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
  cursor: pointer;
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

.logout-btn {
  position: relative;
  left: 24px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.5em 1em;
  border-radius: 4px;
  background-color: #ca1310;
  cursor: pointer;
  color: #fff;
  transition: background-color 200ms ease;
}
.logout-btn:hover {
  background-color: #e92e2b;
}
.logout-btn span {
  font-size: 1.3rem;
}
</style>
