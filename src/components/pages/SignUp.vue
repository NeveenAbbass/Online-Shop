<template>
  <h1 class="py-5">Sign Up</h1>
  <h2>{{id}}</h2>
  <form @submit.prevent="addNewUser()">
    <div id="emailHelp" class="form-text pb-4">We'll never share your info with anyone else.</div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputName" v-model="name">
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputEmail1" v-model="email">
  </div>
  <div class="mb-3">
    <label for="exampleInputPhone" class="form-label">Phone Number</label>
    <input type="text" class="form-control" id="exampleInputPhone" v-model="phoneno">
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label">Address</label>
    <input type="text" class="form-control" id="exampleInputAddress" v-model="address">
  </div>
  <div class="mb-3">
    <label for="exampleInputAddress" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputAddress" v-model="password">
  </div>
    <div class="radio-style mb-3">
        <label class="me-3">Are you?</label>
        <input type="radio" name="usertype" value="user" v-model="usertype"/> User
        <input type="radio" name="usertype" value="admin" v-model="usertype" /> Admin
  </div>
  <button type="submit" class="btn btn-dark">Submit</button>
</form>
</template>

<script>
import axios from "axios";
import users from "../../../public/mixins/users.js"
export default {
  name: "UpdateUser",
  mixins:[users],
  data(){
    return{
      id:'',
      name:'',
      phoneno:'',
      email:'',
      address:'',
      password:'',
      usertype:''
    }
  },
  methods:{
    addNewUser(){
      if(this.usertype == 'user'){
      axios.post("http://localhost:2000/users",{
        name:this.name,
        phoneno:this.phoneo,
        email:this.email,
        address:this.address,
        password:this.password
      }).then(res=>{
        console.log(res.data)
        this.$router.push("/products")})
        .catch(err=>console.log(err))
      }
      else if(this.usertype == 'admin'){
      axios.post("http://localhost:2000/admins",{
        name:this.name,
        phoneno:this.phoneo,
        email:this.email,
        address:this.address,
        password:this.password
      }).then(res=>{
        console.log(res.data)
        this.$router.push("/users")})
        .catch(err=>console.log(err))
      }
  },
    
      EditUserById(){
        axios.put(`http://localhost:2000/users/${this.id}`,{
          name : this.name,
          phoneno : this.phoneno,
          address: this.address,
          email : this.email   
        }).then(res=>{
            console.log(res);
            this.$router.push("/users")
        }).catch(err=>console.log(err))
    },
  created(){
    this.id = this.$route.params.id

    if(this.id){
      this.getUserById();
    }
    console.log(`stuff${this.id}`);
  }
  },
};
</script>

<style scoped>

</style>