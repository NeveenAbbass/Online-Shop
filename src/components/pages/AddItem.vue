<template>
  <h1 class="py-5" >Add a New Product</h1>
  <h2>{{id}}</h2>
  <form @submit.prevent="id?EditProductById():addNewItem()">
  <div class="mb-3">
    <label for="exampleInpuCode" class="form-label">code</label>
    <input type="text" class="form-control" id="exampleInpuCode" v-model="code">
  </div>
  <div class="mb-3">
    <label for="exampleInputName" class="form-label">name</label>
    <input type="text" class="form-control" id="exampleInputName" v-model="name">
  </div>
  <div class="mb-3">
    <label for="exampleInprice" class="form-label">Price</label>
    <input type="text" class="form-control" id="exampleInprice" v-model="price">
  </div>
  <div class="mb-3">
    <label for="exampleInputdescription" class="form-label">Description</label>
    <input type="text" class="form-control" id="exampleInputdescription" v-model="description">
  </div>
  <button type="submit" class="btn btn-dark">Add to Products</button>
</form>
</template>

<script>
import axios from "axios";
import users from "../../../public/mixins/users.js"
export default {
  name: "AddItem",
  mixins:[users],
  data(){
    return{
      id:'',
      code:'',
      name:'',
      price:'',
      description:'',
    }
  },
  methods:{
    addNewItem(){
      axios.post("http://localhost:2000/products",{
        code:this.code,
        name:this.name,
        price:this.price,
        description:this.description,
      }).then(res=>{
        console.log(res.data)
        this.$router.push("/admin")})
        .catch(err=>console.log(err))
  },
    
      EditProductById(){
        axios.put(`http://localhost:2000/products/${this.id}`,{
          code:this.code,
          name:this.name,
          price:this.price,
          description:this.description   
        }).then(res=>{
            console.log(res);
            this.$router.push("/admin")
        }).catch(err=>console.log(err))
    },
  created(){
    this.id = this.$route.params.id
    if(this.id){
      this.getProductById();
    }
    console.log(`stuff${this.id}`);
  }
  },
};
</script>

<style scoped>

</style>