import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: JSON.parse(localStorage.getItem('cartItems')) || [],
    shippingAddress: JSON.parse(localStorage.getItem('shippingAddress')) || {},
    paymentMethod: localStorage.getItem('paymentMethod') || '',
    totalPrice: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            const existingItem = state.items.find((i) => i._id === item._id);

            if (existingItem) {
                existingItem.quantity += item.quantity;
            } else {
                state.items.push(item);
            }

            localStorage.setItem('cartItems', JSON.stringify(state.items));
            state.totalPrice = calculateTotal(state.items);
        },

        removeItem: (state, action) => {
            state.items = state.items.filter((item) => item._id !== action.payload);
            localStorage.setItem('cartItems', JSON.stringify(state.items));
            state.totalPrice = calculateTotal(state.items);
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find((i) => i._id === id);

            if (item) {
                item.quantity = quantity;
                localStorage.setItem('cartItems', JSON.stringify(state.items));
                state.totalPrice = calculateTotal(state.items);
            }
        },

        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cartItems');
            state.totalPrice = 0;
        },

        saveShippingAddress: (state, action) => {
            state.shippingAddress = action.payload;
            localStorage.setItem('shippingAddress', JSON.stringify(action.payload));
        },

        savePaymentMethod: (state, action) => {
            state.paymentMethod = action.payload;
            localStorage.setItem('paymentMethod', action.payload);
        },
    },
});

const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        const price = item.discount > 0 ?
            item.price * (1 - item.discount / 100) :
            item.price;
        return total + price * item.quantity;
    }, 0);
};

export const {
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    saveShippingAddress,
    savePaymentMethod
} = cartSlice.actions;

export default cartSlice.reducer;