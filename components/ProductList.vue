<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="addToCart"
    />
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  props: {
    products: Array
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product);
    }
  }
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
}
</style>
