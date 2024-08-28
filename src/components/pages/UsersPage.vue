
<template>
  <h1 class="py-4">Dashboard</h1>
  <h2>Users</h2>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>

    </tr>
  </thead>
  <tbody>
    <tr  v-for="user in users" :key="user.id">
      <td>{{user.id}}</td>
      <td>{{user.name}}</td>
      <td><button class="btn btn-danger" @click="deleteUser(user.id)">delete</button></td>
      <td><router-link class="btn btn-success" :to="`/users/${user.id}`">View User profile</router-link></td>
    </tr>
    
  </tbody>
</table>

<AdminProducts/>
</template>

<script>
import AdminProducts from "./AdminProducts.vue"
import axios from "axios"

export default{
  name:"UsersPage",
    components: {
      AdminProducts,
  },
  data(){
    return{
      users:[]
    }
  },
  methods:{
    getAllUsers(){
      axios.get("http://localhost:2000/users")
      .then(res=>{console.log(res.data)
        this.users = res.data;
        console.log(this.users);
      })
      .catch(err=>console.log(err))
    },
      deleteUser(id){
        axios.delete(`http://localhost:2000/users/${id}`)
        .then(res=>{console.log(res)
          this.getAllUsers();
        })
        .catch(err=>console.log(err))
        }
    },

  created(){
    this.getAllUsers();
  }
}
</script>

<style scoped>

</style>
