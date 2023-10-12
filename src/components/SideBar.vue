<template>
  <nav class="sidebarnav">
    <div class="sidebar">
      <div class="logo">
        <i class="pi pi-home" style="font-size=18px"></i>
        <span class="logo-name">My Dashboard </span>
      </div>
      <div class="sidebar-content">
        <ul class="lists">
          <li class="list" @click="selectedTask('Dashboard')">
            <a href="#" class="nav-link">
              <i class="icon pi pi-home"></i>
              <span class="link">Dashboard</span>
            </a>
          </li>
          <li class="list" @click="selectedTask('Show Users')">
            <a href="#" class="nav-link">
              <i class="pi pi-user"></i>
              <span class="link">Users</span>
            </a>
          </li>
          <li class="list" @click="selectedTask('Add User')">
            <a href="#" class="nav-link">
              <i class="pi pi-user"></i>
              <span class="link">New User</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="pi pi-table"></i>
              <span class="link">Dropdown menu</span>
            </a>
          </li>
          <li class="list">
            <a
              href="https://github.com/mahafareed14/vue-dashboard"
              target="_blank"
              class="nav-link"
            >
              <i class="pi pi-github"></i>
              <span class="link">GitHub</span>
            </a>
          </li>
          <li class="list">
            <a href="#" class="nav-link">
              <i class="pi pi-user"></i>
              <span class="link">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SideBar",
  methods: {
    selectedTask(task) {
      this.$emit("selectedTask", task);
    },
  },
};
</script>

<style scoped>
@import "../css/sidebar.css";
</style>
