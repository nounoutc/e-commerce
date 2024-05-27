<template>
  <div class="product-item">
    <img :src="product.image" alt="product image" />
    <h2>{{ product.title }}</h2>
    <p>\${{ product.price }}</p>
    <button @click="emitAddToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: Object
  },
  methods: {
    emitAddToCart() {
      this.$emit('add-to-cart', this.product);
    }
  }
};
</script>

<style scoped>
.product-item {
  border: 1px solid #ddd;
  padding: 20px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}
.product-item img {
  max-width: 100%;
  height: auto;
}
</style>
