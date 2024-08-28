<template>
  <h1>User Profile</h1>
  <h2>{{user.name}}</h2>
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Address</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"></th>
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td>{{user.email}}</td>
      <td>{{user.phoneno}}</td>
      <td>{{user.address}}</td>

    </tr>
    
  </tbody>
</table>
</template>

<script>
import axios from "axios"
export default{
  name: 'OneUser',
  data(){
    return{
      id:'',
      user:{}
    }
  },
  methods:{
    getIdOfURL(){
      return this.id = this.$route.params.id
    },
    sendIdToURL(){
    axios.get(`http://localhost:2000/users/${this.id}`)
    .then(res=>this.user = res.data)
    .catch(err=>console.log(err))
  }
  },
  created(){
    this.getIdOfURL();
    this.sendIdToURL();
  }
  
}
</script>
