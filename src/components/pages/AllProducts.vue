<template>
  <h1 class="py-4">Products</h1>
  <div v-for="product in products" :key="product.code" class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">{{product.name }}</h5>
    <h6 class="card-title">{{product.price }}</h6>
    <p class="card-text">{{product.description}}</p>
    <div></div>
    <button href="#" class="btn btn-primary me-3" @click="AddToCart(item)">Add to cart</button>
    <button class="btn btn-success"><router-link class="text-decoration-none text-light" :to="`/products/${product.id}`">View Product Detail</router-link></button>

  </div>
</div>
<hr>
</template>

<script>
import {mapState} from 'vuex'
export default{
  name: 'AllProducts',
  created(){
    this.$store.dispatch('GetAllProducts')

  },
  computed:{
    // de elly btkhliny a map elhagat elly gaialy mn el store into te page to display, whether as vars or to put in html tgs
    ...mapState(['products'])
  },
  methods:{
    AddToCart(item){
    this.$store.dispatch('AddToCart',item)
  },
  },

}
</script>

