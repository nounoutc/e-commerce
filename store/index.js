import { createStore } from 'vuex';

export default createStore({
  state: {
    cartItems: []
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const item = state.cartItems.find(item => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId) {
      state.cartItems = state.cartItems.filter(item => item.id !== productId);
    },
    UPDATE_CART_QUANTITY(state, { id, quantity }) {
      const item = state.cartItems.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateCartQuantity({ commit }, { id, quantity }) {
      commit('UPDATE_CART_QUANTITY', { id, quantity });
    }
  },
  getters: {
    cartItems: state => state.cartItems,
    cartItemCount: state => state.cartItems.reduce((count, item) => count + item.quantity, 0),
    cartTotal: state => state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  }
});
