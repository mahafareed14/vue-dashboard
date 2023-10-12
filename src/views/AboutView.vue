<template>
  <div class="about">
    <h1>About this Application</h1>
    <h2>Dashboard</h2>
    <p>
      Here were are showing the data which we calculated from the data that is
      gotten from API call
    </p>
    <p>On the first widget total users are shown</p>
    <p>On the second card users which are using same domain are shown</p>
    <p>On the third card users which are from same city are shown</p>
    <h2>Showing Users</h2>
    <p>
      Here we are showing all the data that we get from API call and we are
      showing it in table format
    </p>
    <h2>Adding a new user</h2>
    <p>
      Here we are adding a new user to the database. The new user will be
      immediately showning in table format by storing it in vuex store.
    </p>
  </div>
</template>
<style scoped>
.about {
  text-align: left;
}
</style>
