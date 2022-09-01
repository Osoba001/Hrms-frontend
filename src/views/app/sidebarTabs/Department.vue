<template>
  <div class="department-container">
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
</template>

<script>
import DepartmentCard from '@/components/DepartmentCard.vue'
import { mapActions } from 'vuex'
export default {
  components: { DepartmentCard },
  data() {
    return {
      departments: [],
    }
  },
  methods: {
    ...mapActions('appStore', ['getDepartments']),
  },
  async created() {
    this.departments = await this.getDepartments()
  },
}
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
</style>
