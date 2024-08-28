<template>
  <h1>Product Details</h1>
  <h2 class="mb-2">{{product.name}}</h2>
  <div class="card-body">
    <h5 class="card-title mb-3">{{product.name }}</h5>
    <h6 class="card-title mb-3">{{product.price }}</h6>
    <p class="card-text">{{product.description}}</p>
    <button href="#" class="btn btn-primary" @click="AddToCart(item)">Add to cart</button>
  </div>
</template>

<script>
import axios from "axios"
export default{
  name: 'OneProduct',
  data(){
    return{
      id:'',
      product:{}
    }
  },
  methods:{
    getIdOfURL(){
      return this.id = this.$route.params.id
    },
    sendIdToURL(){
    axios.get(`http://localhost:2000/products/${this.id}`)
    .then(res=>this.product = res.data)
    .catch(err=>console.log(err))
  }
  },
  created(){
    this.getIdOfURL();
    this.sendIdToURL();
  }
  
}
</script>
