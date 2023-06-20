import { CartItem } from "@/model/cart-item";
import { Product } from "@/model/product";
import { create } from "zustand";

export interface CartState {
    list: CartItem[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: string) => void;
    increaseQuantity: (productId: string) => void;
    decreaseQuantity: (productId: string) => void;
    clearCart: () => void;
}

export const useCart = create<CartState>((set, get) => ({
    list: [],
    addToCart: (product: Product) => {

        const found = get().list.find(item  => item.product.id === product.id)
        if (found) {
            found.quantity++
            set(state => ({
                list: state.list.map(item => {
                    return item.product.id === found.product.id ? found : item
                })
            }))
        } else {
            const item: CartItem = { product, quantity: 1};
            set({ list: [...get().list, item ]})
            // set({ list: [...get().list, item] });
        }

    },
    removeFromCart: (productId: string) => {

    },
    increaseQuantity: (productId: string) => {
        
    },
    decreaseQuantity: (productId: string) => {
        
    },
    clearCart: () => {
        
    },
}))