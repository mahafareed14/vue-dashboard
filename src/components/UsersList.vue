<script>
export default {
  name: "UsersList",
  data: () => ({ keys: [], userlength: 0 }),
  mounted() {
    this.getTableHeaders();
  },
  methods: {
    getTableHeaders() {
      if (this.$store.state.users.length > 0) {
        this.userlength = this.$store.state.users.length;
        this.keys = Object.keys(this.$store.state.users[0]);
      }
      this.keys = this.keys.filter(
        (key) => key !== "createdAt" && key !== "id" && key !== "domain"
      );
    },
  },
};
</script>
<template>
  <h1>Showing {{ userlength }} Users</h1>
  <section>
    <table class="fl-table">
      <thead>
        <tr>
          <th v-for="(key, index) in keys" :key="index">
            {{ key }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in $store.state.users" :key="index">
          <td v-for="(key, ind) in keys" :key="ind">
            <span> {{ row[key] }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>
<style>
@import "../css/userlist.css";
</style>
