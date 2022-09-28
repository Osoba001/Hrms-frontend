<template>
  <div v-if="departments.length" class="department-container">
    <section
      v-motion
      :initial="{
        opacity: 0,
        y: -50,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
    >
      <DepartmentCard
        v-for="department in departments"
        :key="department.id"
        :department="department"
      />
    </section>
  </div>
  <div v-else class="loader-container">
    <Loader />
  </div>
</template>

<script>
import DepartmentCard from "@/components/DepartmentCard.vue";
import { mapActions } from "vuex";
import Loader from "@/components/Loader.vue";
import axios from "axios";
export default {
  components: { DepartmentCard, Loader },
  data() {
    return {
      departments: [],
    };
  },
  methods: {
    ...mapActions("appStore", ["getDepartments"]),
  },
  async mounted() {
    try {
      const response = await axios.get(
        "http://creshr.svr.cyphercrescent.com:44386/api/Department"
      );
      this.departments = response.data;
    } catch (err) {
      alert("Failed to fetch departments", err.message);
      console.log(err.message);
    }
  },
};
</script>
<style scoped>
.department-container {
  margin-top: 0.3rem;
  padding: 1.5rem;
  min-height: 350px;
  overflow-y: auto;
  flex: 1;
}
section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 1rem;
}
.loader-container {
  flex: 1;
}
</style>
