import { configureStore } from "@reduxjs/toolkit";
import FavouriteSlice  from "./FavouriteSlices";

const reducer ={
favourite: FavouriteSlice,
}
const store = configureStore({ 
    reducer: reducer,

});
export default store;