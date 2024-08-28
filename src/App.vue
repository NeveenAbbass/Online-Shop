
<template>
  <NavBar v-if="!$route.meta.hideNavBar"/>
  <div class="container">
    <router-view></router-view> 
  </div>
</template>

<script>
import NavBar from "./components/pages/NavBar.vue"
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>

</style>
