<template>
  <nav class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/cart">Cart ({{ cartItemCount }})</router-link>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppNavbar',
  computed: {
    ...mapGetters(['cartItemCount']),
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
}
.navbar a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
}
</style>
