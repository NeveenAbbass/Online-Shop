<template>
<nav class="navbar navbar-expand-lg bg-dark text-light">
  <div class="container">
    <router-link class="navbar-brand text-light" to="/signin">Shop</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item my-1">
            <router-link class="nav-link text-light" to="/products">Home</router-link>
        </li>
        <li class="nav-item my-1">
          <router-link class="nav-link text-light" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light ps-5" to="/cart"><img style="width: 30px;" src="../../assets/shopping-cart.png" alt="Shopping Cart"></router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default({
  name: 'NavBar',
  data(){
    return{
      userType: ''
    }
  }
})


</script>
