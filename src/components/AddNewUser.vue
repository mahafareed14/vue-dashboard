<script>
export default {
  name: "AddNewUser",
  data: () => ({
    payload: {
      name: "",
      email: "",
      city: "",
      postalcode: "",
    },
  }),
  methods: {
    addUser() {
      this.$store.dispatch("addNewUser", this.payload);
      this.payload = {
        name: "",
        email: "",
        city: "",
        postalcode: "",
      };
      alert("New user added");
    },
  },
};
</script>
<template>
  <div>
    <div class="form-style-5">
      <form>
        <fieldset>
          <legend>User Information</legend>
          <div>
            <input
              type="text"
              v-model="payload.name"
              placeholder="Your Name *"
            />
          </div>
          <input
            type="email"
            v-model="payload.email"
            placeholder="Your Email *"
          />
          <input type="text" v-model="payload.city" placeholder="Your City *" />
          <input
            type="text"
            v-model="payload.postalcode"
            placeholder="Your Postal Code *"
          />
        </fieldset>
        <input type="submit" value="Add User" @click="addUser()" />
      </form>
    </div>
  </div>
</template>
<style>
@import "../css/newuser.css";
</style>
