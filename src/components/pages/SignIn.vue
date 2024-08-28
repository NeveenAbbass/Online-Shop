<template>

   <h1 class="p-5 ps-0">Sign in</h1>
   <form @submit.prevent="verifyUser">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password">
  </div>
  <div class="radio-style mb-3">
        <label class="me-3">Are you?</label>
        <input type="radio" name="usertype" value="user" v-model="usertype"/> User
        <input type="radio" name="usertype" value="admin" v-model="usertype" /> Admin
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: "",
      password: "",
      usertype: "",
    };
  },
  methods: {
    verifyUser() {
      axios.get("http://localhost:2000/users")
        .then((response) => {
          if (this.usertype === "user") {
            for (let user of response.data) {
              if (
                user.email === this.email &&
                user.password === this.password
              ) {
                this.$router.push("/products");
                return;
              }
            }
              alert("you're not a registered user, Let's sign you up")
              this.$router.push("/signup");
          }
        })
        .catch((error) => {
          console.error(error);
        });

        axios.get("http://localhost:2000/admins")
        .then((response) => {
          if (this.usertype === "admin") {
            for (let user of response.data) {
              if (
                user.email === this.email &&
                user.password === this.password
              ) {
                this.$router.push("/admin");
                return;
              }
            }
              alert("you're not a registered user, Let's sign you up")
              this.$router.push("/signup");
          }
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
