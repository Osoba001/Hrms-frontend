<template>
  <section class="employees">
    <table>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
      <tr v-for="employee in data" :key="employee">
        <td>{{ employee }}</td>
        <td>
          <select name="role" id="role">
            <option value="manager">Manager</option>
            <option value="director">Director</option>
            <option value="staff">Staff</option>
            <option value="intern">Intern</option>
            <option value="corper">Corper</option>
          </select>
        </td>
      </tr>
    </table>
  </section>
</template>

<script>
export default {
  name: 'AddMultipleEmployees',
  props: ['data'],
}
</script>

<style scoped>
.employees {
  background-color: #fff;
}
table {
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #eee;
}
</style>
