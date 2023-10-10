<template>
  <DashboardCard
    :text="'Total Users'"
    :number="$store.state.users.length"
  ></DashboardCard>
  <DashboardCard
    :text="'Total Users with same Domain i.e. ' + domain_name"
    :number="totalusers_samedomain"
    style="margin-top: -314px; margin-left: 659px"
  ></DashboardCard>
  <DashboardCard
    :text="'Total Users with same City i.e. ' + city_name"
    :number="totalusers_samecity"
    style="margin-top: -314px; margin-left: 1009px"
  ></DashboardCard>
</template>

<script>
import DashboardCard from "./DashboardCard";
export default {
  name: "DashboardData",
  data: () => ({
    totalusers_samedomain: 0,
    totalusers_samecity: 0,
    city_name: "",
    domain_name: "",
  }),
  components: {
    DashboardCard,
  },
  mounted() {
    this.getUsersOfSameEmailDomain();
    this.getUsersOfSameCity();
  },
  updated() {
    this.getUsersOfSameEmailDomain();
    this.getUsersOfSameCity();
  },
  methods: {
    getUsersOfSameEmailDomain() {
      const users = this.$store.state.users;
      const totaldomains = [];
      const arrayOfUniqueDomains = [];
      // Adding the domain in each user.
      users.map((user) => {
        let index = user.email.indexOf("@") + 1;
        user.domain = user.email.substring(index);
      });
      // Getting all the domains.
      users.forEach((user) => {
        if (totaldomains.indexOf(user.domain) === -1)
          totaldomains.push(user.domain);
      });
      // Getting the total number of users with same domain.
      for (let i = 0; i < totaldomains.length; i++) {
        const newusers = users.filter(
          (user) => user.domain === totaldomains[i]
        );
        arrayOfUniqueDomains.push(newusers);
      }
      // Finding the highest number of users with same domain and domain name.
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

      // Getting all the domains.
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
          this.city_name = arr[0].city;
        }
      });
    },
  },
};
</script>
