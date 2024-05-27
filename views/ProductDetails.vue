<!-- src/views/ProductDetails.vue -->
<template>
  <div class="product-details" v-if="product">
    <img :src="product.image" :alt="product.title" />
    <h2>{{ product.title }}</h2>
    <p>{{ product.description }}</p>
    <p>\${{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      product: null
    };
  },
  created() {
    const productId = this.$route.params.id;
    axios.get(`https://fakestoreapi.com/products/${productId}`)
      .then(response => {
        this.product = response.data;
      })
      .catch(error => console.error('Error fetching product details:', error));
  },
  methods: {
    ...mapActions(['addToCart'])
  }
};
</script>

<style scoped>
.product-details {
  padding: 20px;
}

.product-details img {
  max-width: 100%;
  height: auto;
}
</style>
