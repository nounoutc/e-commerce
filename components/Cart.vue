<template>
  <div class="cart">
    <h1>Your Shopping Cart</h1>
    <div v-if="cartItems.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product image" />
        <div class="details">
          <h2>{{ item.title }}</h2>
          <p>\${{ item.price }} x {{ item.quantity }}</p>
          <p>Total: \${{ item.price * item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
          <input type="number" v-model.number="item.quantity" @change="updateQuantity(item)" min="1" />
        </div>
      </div>
      <p class="total">Total: \${{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  computed: {
    ...mapState(['cartItems']),
    ...mapGetters(['cartTotal']),
  },
  methods: {
    ...mapActions(['removeFromCart', 'updateCartQuantity']),
    updateQuantity(item) {
      if (item.quantity < 1) item.quantity = 1; // Ensure the quantity is at least 1
      this.updateCartQuantity({ id: item.id, quantity: item.quantity });
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 20px;
}
.cart-item {
  display: flex;
  margin-bottom: 20px;
}
.cart-item img {
  width: 100px;
  margin-right: 20px;
}
.cart-item .details {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.cart-item .details input {
  width: 50px;
}
.total {
  font-weight: bold;
  margin-top: 20px;
}
</style>
