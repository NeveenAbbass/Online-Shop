<template>
  <button @click="back">Back to homepage</button>
</template>

<script>
export default {
  name: 'SignUp',
  methods:{
    back(){
      this.router.push("/")
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
