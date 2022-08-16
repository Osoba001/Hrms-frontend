<template>
  <div class="department-container">
    <section>
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
export default {
  components: { DepartmentCard },
  data() {
    return {
      departments: [
        {
          id: 1,
          title: 'Corporate Finance',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. James Smith',
        },
        {
          id: 2,
          title: 'Business Development',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. Harry Dickson',
        },
        {
          id: 3,
          title: 'Corporate Services',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. Benjamin Stone',
        },
        {
          id: 4,
          title: 'ETDS',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. Tosin Mike',
        },
        {
          id: 5,
          title: 'Integrated Asset Management',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mrs. Jane Doe',
        },
        {
          id: 6,
          title: 'Data Democratisation',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. Emmanuel Jack',
        },
        {
          id: 7,
          title: 'Research and Development',
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum eos fugiat quisquam dolorum autem officia dolore architecto, incidunt quibusdam cum cumque dolorem et in quod fuga. Fuga, saepe! Praesentium, consectetur!',
          manager: 'Mr. Michael Jude',
        },
      ],
    }
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
