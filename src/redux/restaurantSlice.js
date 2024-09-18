import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//API call or Async function call using thunk
// first argument_______________________(name(slice)/name(think))
export const fetchRestaurent = createAsyncThunk('restaurantSlice/fetchRestaurent', () => {
    const result = axios.get('./restaurant.json').then(response => response.data);
    /* console.log("response from thunk")
    console.log(result) */
    return result;
})

const restaurantSlice = createSlice({
    name: "restaurantSlice",
    initialState: {
        loading: false, // pending state that menas API call in progress
        allRestaurent: [], //-resolve stage
        error: "" //rejected state -return error
    },
    extraReducers: (builder) => {
        builder.addCase(fetchRestaurent.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurent.fulfilled, (state, action) => {
            state.loading = false;
            state.searchRestaurant=action.payload;
            state.allRestaurent = action.payload;
            state.error = "";
        })
        builder.addCase(fetchRestaurent.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurent = []
            state.error = action.error.message
        })
    },
    reducers:{
        searchRestaurant:(state,action)=>{
            state.allRestaurent.restaurants =
            state.searchRestaurant?.restaurants?.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})


export default restaurantSlice.reducer;
export const {searchRestaurant}=restaurantSlice.actions;
//redux works on synchronous operation
// but API calls works in ASYNC operation
//to deal with ASYNC opretaion in Redux, we use redux Thunk
// thunk is not a part of slice, its a seperate method in redux toolkit