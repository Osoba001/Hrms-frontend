<template>
  <section class="employees-table">
    <table>
      <tr>
        <th>Email</th>
        <th>Role</th>
      </tr>
      <tr v-for="(employee, index) in data" :key="employee + index">
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
        <td>
          <div
            class="delete-icon p-ripple"
            @click="REMOVE_SELECTED_EMAIL(employee)"
            v-ripple
          >
            <span class="material-symbols-outlined"> delete </span>
          </div>
        </td>
      </tr>
    </table>
  </section>
  <button class="configure-btn">Configure users</button>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'AddMultipleEmployees',
  props: ['data'],
  methods: {
    ...mapMutations('appStore', ['REMOVE_SELECTED_EMAIL']),
  },
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

select {
  padding: 0.3em 0.5em;
  font-size: 0.875rem;
  border: 1px solid #cad6e4;
  border-radius: 5px;
  font-family: 'Lato', Helvetica, sans-serif;
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
  flex-gap: 5px;
  margin-top: 2rem;
  margin-left: auto;
}

button.configure-btn:hover {
  background-color: #255eb4;
}

.delete-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #eee;
  display: grid;
  place-items: center;
  cursor: pointer;
}

.delete-icon span {
  font-size: 1.2rem;
  color: red;
}
</style>
