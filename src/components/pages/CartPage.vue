<template>
  <h1 class="py-4">Cart</h1>
  <div v-for="item in items" :key="item.code" class="card w-75 mb-3">
  <div class="card-body">
    <h5 class="card-title">{{item.name }}</h5>
    <h6 class="card-title">{{item.price }}</h6>
    <p class="card-text">{{item.description}}</p>
    <button href="#" class="btn btn-danger" @click="DeleteItem(item)">Delete Item</button>
  </div>
</div>
<hr>
<h4>Cart has {{ ItemsCount }} items</h4>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default({
  name: 'CartPage',
  computed:{
    ...mapState(['items']),
    ...mapGetters({
      ItemsCount: 'ItemsCount'
  })
  },

  methods:{
    DeleteItem(item){
      this.$store.dispatch('DeleteItem',item)
    }
  }
})
</script>
