import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { StoreItem } from "@/types";

type Cart = {
  cartItems: StoreItem[];
  addItemToCart: (item: StoreItem) => void;
  removeItemFromCart: (item: StoreItem) => void;
  clearCart: () => void;
  getTotalOfItemsInCart: () => number;

  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const useCart = create<Cart>()(
  persist(
    (set, get) => ({
      cartItems: [],
      addItemToCart: (item) => {
        set((state) => ({
          cartItems: [...state.cartItems, item],
        }));
      },
      removeItemFromCart: (item) => {
        set((state) => ({
          cartItems: state.cartItems.filter(
            (cartItem) => cartItem.id !== item.id,
          ),
        }));
      },
      clearCart: () => {
        set({ cartItems: [] });
      },
      getTotalOfItemsInCart: () => get().cartItems.length,

      isCartOpen: false,
      openCart: () => set({ isCartOpen: true }),
      closeCart: () => set({ isCartOpen: false }),
    }),
    {
      name: "cart-storage-session",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export default useCart;
