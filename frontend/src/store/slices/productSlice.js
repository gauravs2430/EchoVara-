import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { productAPI } from '../../services/api';

export const fetchProducts = createAsyncThunk('products/fetchAll', async () => {
    const response = await productAPI.getAll();
    return response.data.products;
});

export const fetchFeaturedProducts = createAsyncThunk('products/fetchFeatured', async () => {
    const response = await productAPI.getFeatured();
    return response.data.products;
});

const productSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        featured: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(fetchFeaturedProducts.fulfilled, (state, action) => {
                state.featured = action.payload;
            });
    },
});

export default productSlice.reducer;
