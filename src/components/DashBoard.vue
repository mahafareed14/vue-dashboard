<template>
  <div>
    <SideBar @selectedTask="setTask($event)"></SideBar>
    <UsersList
      v-if="$store.state.users.length && selectedTask == 'Show Users'"
    ></UsersList>
    <AddNewUser v-if="selectedTask == 'Add User'"></AddNewUser>
    <DashboardData v-if="selectedTask == 'Dashboard'"></DashboardData>
    <DashBoardChart v-if="selectedTask == 'Settings'"></DashBoardChart>
  </div>
</template>

<script>
import SideBar from "./SideBar.vue";
import UsersList from "./UsersList.vue";
import AddNewUser from "./AddNewUser.vue";
import DashboardData from "./DashboardData.vue";
import DashBoardChart from "./DashboardChart.vue";
export default {
  name: "DashBoard",
  data: () => ({
    selectedTask: "Dashboard",
  }),
  components: {
    SideBar,
    UsersList,
    AddNewUser,
    DashboardData,
    DashBoardChart,
  },
  mounted() {
    this.$store.dispatch("loadUsers");
  },
  methods: {
    setTask($event) {
      this.selectedTask = $event;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  text-align: center;
}
</style>
