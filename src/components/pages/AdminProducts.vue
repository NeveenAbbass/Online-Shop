<template>
  <h1 class="py-4">Products (Admin View)</h1>
  <button href="#" class="btn btn-primary my-3"><router-link class="text-decoration-none text-light" :to="`/additem`">Add new product</router-link></button>
  <div v-for="product in products" :key="product.code" class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">{{product.name }}</h5>
    <h6 class="card-title">{{product.price }}</h6>
    <p class="card-text">{{product.description}}</p>
    <button class="btn btn-success me-3"><router-link class="text-decoration-none text-light" :to="`/productsAdmin/${product.id}`">View & edit product</router-link></button>
    <button href="#" class="btn btn-danger" @click="DeleteProductPriv(product.id)">Delete Item</button>
  </div>
</div>
<hr>
</template>

<script>
import {mapState} from 'vuex'
export default{
  name: 'AdminProducts',
  created(){
    this.$store.dispatch('GetAllProducts')
    
  },
  computed:{
    // de elly btkhliny a map elhagat elly gaialy mn el store into te page to display, whether as vars or to put in html tgs
    ...mapState(['products'])
  },
  methods:{
    DeleteProductPriv(item){
    this.$store.dispatch('DeleteProductPriv',item)
  }
  }
}
</script>
