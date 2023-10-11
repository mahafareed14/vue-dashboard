<template>
  <div v-if="$store.state.users.length > 0">
    <DashboardCard
      :text="'Total Users'"
      :number="$store.state.users.length"
    ></DashboardCard>
    <DashboardCard
      :text="'Total Users with same Domain i.e. ' + domain_name"
      :number="totalusers_samedomain"
      style="margin-top: -257px; margin-left: 659px"
    ></DashboardCard>
    <DashboardCard
      :text="city_name"
      :number="totalusers_samecity"
      style="margin-top: -259px; margin-left: 1009px"
    ></DashboardCard>
    <DashBoardChart v-if="$store.state.users.length > 0"></DashBoardChart>
  </div>
</template>

<script>
import DashboardCard from "./DashboardCard";
import DashBoardChart from "./DashboardChart";
import { GetAllDomains, GetUsersAccrossDomains } from "../services/UserService";

export default {
  name: "DashboardData",
  data: () => ({
    totalusers_samedomain: 0,
    totalusers_samecity: 0,
    city_name: "No users within the same city",
    domain_name: "",
  }),
  components: {
    DashboardCard,
    DashBoardChart,
  },
  mounted() {
    if (this.$store.state.users.length > 0) {
      this.getUsersOfSameEmailDomain();
      this.getUsersOfSameCity();
    }
  },
  updated() {
    if (this.$store.state.users.length > 0) {
      this.getUsersOfSameEmailDomain();
      this.getUsersOfSameCity();
    }
  },
  methods: {
    getUsersOfSameEmailDomain() {
      const users = this.$store.state.users;
      let totaldomains = [];
      let arrayOfUniqueDomains = [];

      totaldomains = GetAllDomains(users);
      arrayOfUniqueDomains = GetUsersAccrossDomains(users, totaldomains);

      // Finding the highest number of users with same domain.
      let domain = "";
      arrayOfUniqueDomains.forEach((arr) => {
        if (arr.length > this.totalusers_samedomain) {
          this.totalusers_samedomain = arr.length;
          domain = arr[0].domain;
          this.domain_name = domain.substring(0, domain.indexOf("."));
        }
      });
    },

    getUsersOfSameCity() {
      const users = this.$store.state.users;
      const totalCities = [];
      const arrayOfUniqueCities = [];

      // Getting all the cities.
      users.forEach((user) => {
        if (totalCities.indexOf(user.city) === -1) totalCities.push(user.city);
      });
      if (totalCities.length === users.length) return;

      // Getting the total number of users with same city.
      for (let i = 0; i < totalCities.length; i++) {
        const newusers = users.filter((user) => user.city === totalCities[i]);
        arrayOfUniqueCities.push(newusers);
      }

      // Finding the highest number of users with same city and city name.
      arrayOfUniqueCities.forEach((arr) => {
        if (arr.length > this.totalusers_samecity) {
          this.totalusers_samecity = arr.length;
          this.city_name = "City with most users is " + arr[0].city;
        }
      });
    },
  },
};
</script>
