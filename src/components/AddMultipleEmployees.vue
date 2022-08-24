<template>
  <section class="employees-table">
    <table>
      <tr>
        <th>Email</th>
        <th>Role</th>
      </tr>
      <tr v-for="employee in data" :key="employee">
        <td>{{ employee }}</td>
        <td>
          <select name="role" id="role">
            <option value="staff">Staff</option>
            <option value="manager">Manager</option>
            <option value="director">Director</option>
            <option value="intern">Intern</option>
            <option value="corper">Corper</option>
          </select>
        </td>
      </tr>
    </table>
  </section>
  <button class="configure-btn">Configure users</button>
</template>

<script>
export default {
  name: 'AddMultipleEmployees',
  props: ['data'],
}
</script>

<style scoped>
.employees-table {
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

button.configure-btn {
  padding: 0.5em 1em;
  background-color: #2b9de9;
  color: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 250ms ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 2rem;
  margin-left: auto;
}

button.configure-btn:hover {
  background-color: #255eb4;
}
</style>
