<template>
  <div class="tab-container employment-history-container">
    <section>
      <header>
        <h2 class="section-title">Previous employment history</h2>
        <button class="add-experience-btn" @click="toggleModal">
          <span class="material-symbols-rounded"> add </span>
          Add experience
        </button>
      </header>

      <article
        v-for="employment in userInfo.employmentHistory"
        v-bind:key="employment.id"
        class="previous-employment"
      >
        <div class="organisation-logo">
          <img
            v-if="employment.logo"
            :src="employment.logo"
            alt="organisation-logo"
          />
          <span class="material-symbols-outlined" v-if="!employment.logo">
            location_city
          </span>
        </div>
        <div class="employment-details">
          <h3>{{ employment.role }}</h3>
          <p class="organisation-name">{{ employment.organisation }}</p>
          <p class="duration">
            {{ monthNames[new Date(employment.startDate).getMonth()] }}
            {{ new Date(employment.startDate).getFullYear() }} -
            {{ monthNames[new Date(employment.endDate).getMonth()] }}
            {{ new Date(employment.endDate).getFullYear() }} ·
            {{
              monthDiff(
                new Date(employment.startDate),
                new Date(employment.endDate)
              )
            }}mos
          </p>
          <p class="location">{{ employment.location }}</p>
        </div>
      </article>

      <!-- TEMPORARY -->
      <article
        v-for="employment in previousEmployments"
        v-bind:key="employment.id"
        class="previous-employment"
      >
        <div class="organisation-logo">
          <img :src="employment.logo" alt="organisation-logo" />
        </div>
        <div class="employment-details">
          <h3>{{ employment.role }}</h3>
          <p class="organisation-name">{{ employment.organisation }}</p>
          <p class="duration">{{ employment.duration }}</p>
          <p class="location">{{ employment.location }}</p>
        </div>
      </article>
    </section>

    <dashboard-bottom-buttons-nav
      :backRoute="{ name: ROUTES.job }"
      :nextRoute="{ name: ROUTES.certifications }"
    />

    <teleport to=".modals" v-if="showModal">
      <AddEmploymentHistoryModal :toggleModal="toggleModal" />
    </teleport>
  </div>
</template>

<script>
import DashboardBottomButtonsNav from "@/components/DashboardBottomButtonsNav.vue";
import AddEmploymentHistoryModal from "@/components/modals/AddEmploymentHistoryModal.vue";
import { mapGetters } from "vuex";
import { monthDiff } from "@/utils";
import { ROUTES } from "@/global/routes";

export default {
  components: { DashboardBottomButtonsNav, AddEmploymentHistoryModal },
  data() {
    return {
      ROUTES,
      showModal: false,
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      previousEmployments: [
        {
          id: 1,
          role: "Snr. Petroleum Engineer",
          organisation: "Shell Petroleum Development Company",
          duration: "Jul 2022 - Present · 2mos",
          location: "Port Harcourt, Rivers, Nigeria",
          logo: "https://img.favpng.com/13/24/3/royal-dutch-shell-logo-petroleum-shell-oil-company-png-favpng-uxtfbiEHNvpwRBQ042W5XASMA.jpg",
        },
        {
          id: 2,
          role: "Software Engineer",
          organisation: "CypherCrescent Limited",
          duration: "Jul 2021 - Present · 2mos",
          location: "Port Harcourt, Rivers, Nigeria",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoohJtjombSWhBmoTYmWl_sibtCWmgPorDfw&usqp=CAU",
        },
        {
          id: 3,
          role: "Petroleum and Gas Engineer Intern",
          organisation: "Schlumberger",
          duration: "Jul 2022 - Present · 2mos",
          location: "Port Harcourt, Rivers, Nigeria",
          logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrOqZsDzJMEmyrnSNBzrXKUaNrQTXuXAGjFbAyDhBzLw&s",
        },
      ],
      monthDiff,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
  computed: {
    ...mapGetters("appStore", ["userInfo"]),
  },
};
</script>

<style scoped>
.employment-history-container {
  flex: 1;
  display: flex;
  flex-direction: column;
}

section {
  flex: 1;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 0.5rem;
}
section h2 {
  margin: 0;
}

header {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}

.add-experience-btn {
  padding: 0.7em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
}

article.previous-employment {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding-block: 1rem;
}

.previous-employment + .previous-employment {
  border-top: 1px solid #eee;
}

.organisation-logo {
  width: 50px;
  height: 50px;
  background: #eee;
  border-radius: 6px;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.organisation-logo span {
  font-size: 2em;
  color: rgb(86, 86, 86);
}

.organisation-logo img {
  width: 100%;
  height: 100%;
  /* object-fit: cover; */
}

.previous-employment h3 {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
}

.previous-employment p.organisation-name {
  color: #000000e6;
}

.previous-employment p {
  font-weight: 500;
  color: #00000099;
  font-size: 0.875rem;
  line-height: 1.4rem;
}
</style>
