<template>
  <div class="chart">
    {{ labels }}
    {{ dataset }}
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import { GetAllDomains, GetUsersAccrossDomains } from "../services/UserService";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: {
    Bar,
  },
  data: () => ({ chartData: {}, chartOptions: {} }),
  created() {
    this.chartData = {
      labels: [],
      datasets: [
        {
          label: "Users Across Each Domain",
          data: [],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 205, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(201, 203, 207, 0.2)",
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
            "rgb(255, 205, 86)",
            "rgb(75, 192, 192)",
            "rgb(54, 162, 235)",
            "rgb(153, 102, 255)",
            "rgb(201, 203, 207)",
          ],
          borderWidth: 1,
        },
      ],
    };
    this.chartOptions = { responsive: true };
    this.chartData.labels = GetAllDomains(this.$store.state.users);
    this.chartData.datasets[0].data = this.getDataforChart();
    console.log(this.chartData);
  },
  methods: {
    getDataforChart() {
      const users = this.$store.state.users;
      let arrayOfUniqueDomains = [];
      let totalDomains = GetAllDomains(this.$store.state.users);
      arrayOfUniqueDomains = GetUsersAccrossDomains(users, totalDomains);
      let totalUsersAcrossDomains = arrayOfUniqueDomains.map(
        (arr) => arr.length
      );
      return totalUsersAcrossDomains;
    },
  },
};
</script>

<style>
.chart {
  height: 500px;
  width: 500px;
  margin-top: 10px;
  margin-left: 300px;
}
</style>
