<template>
  <div class="home">
    <h1>Product List</h1>
    <ProductList :products="products" @add-to-cart="addToCart" />
  </div>
</template>

<script>
import axios from 'axios';
import ProductList from '../components/ProductList.vue';
import { mapActions } from 'vuex';

export default {
  name: 'HomePage',
  components: {
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    ...mapActions(['addToCart']),
    async fetchProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }
  },
  created() {
    this.fetchProducts();
  }
};
</script>

<style scoped>
.home {
  padding: 20px;
}
</style>
