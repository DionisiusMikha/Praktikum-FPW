import { createSlice } from "@reduxjs/toolkit";

const initialWishlistState = {
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialWishlistState,
  reducers: {
    addToWishlist: (state, action) => {
      try {
        const newItem = action.payload;
        if (!state.items.includes(newItem)) {
          state.items.push(newItem);
        } else {
          console.error("Item already exists in wishlist");
        }
      } catch (error) {
        console.error("Error adding to wishlist:", error);
      }
    },
    removeFromWishlist: (state, action) => {
      try {
        const itemIdToRemove = action.payload;
        const updatedItems = state.items.filter((id) => id !== itemIdToRemove);
        state.items = updatedItems;
      } catch (error) {
        console.error("Error removing from wishlist:", error);
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
