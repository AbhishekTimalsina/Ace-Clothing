import { create } from "zustand";

const useCartStore = create((set) => ({
  cart: [],
  action: {
    addToCart: (addedProduct) => {
      set((state) => {
        let newCartValue = [];
        let isAlreadyAdded = state.cart.some((product) => {
          return product.id === addedProduct.id;
        });
        if (isAlreadyAdded) {
          newCartValue = state.cart.map((product) => {
            if (product.id === addedProduct.id) {
              return { ...product, qty: product.qty + 1 };
            }
            return product;
          });
        } else {
          newCartValue = [...state.cart, { ...addedProduct, qty: 1 }];
        }
        return { cart: newCartValue };
      });
    },
    removeFromCart: (productId) => {
      set((state) => {
        let filteredCart = state.cart.filter(
          (product) => product.id !== productId
        );
        return { cart: filteredCart };
      });
    },
    addProductQuantity(id, newQty) {
      if (newQty > 20) return;
      set((state) => {
        if (newQty < 0) {
          state.action.removeFromCart(id);
          return {};
        }
        let newCartValue = state.cart.map((product) => {
          if (product.id === id) {
            return { ...product, qty: newQty };
          }
          return product;
        });

        return { cart: newCartValue };
      });
    },

    emptyCart() {
      set(() => []);
    },
  },
}));

export const useCart = () => useCartStore((store) => store.cart);
export const useCartActions = () => useCartStore((store) => store.action);
