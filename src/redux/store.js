import { configureStore } from "@reduxjs/toolkit";
import restaurantSlice from "./restaurantSlice";

const store = configureStore({
    reducer:{
        restaurant:restaurantSlice,
    }
})

export default store;