import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";


export const FavouriteSlices=createSlice(
    {
    
    name: 'favourite',
    initialState: [] ,
    _reducers: {
        addfavourites(state, action) {
            // console.log('===action payload===',action.payload)
          
            state.push({title: action.payload.title, path: action.payload.poster_path, rating: action.payload.Rating });
            console.log(state)
        },
        bookmarked(state, action){

alert(action.payload)
        },
        toggletodo(state, action) {
            const todo = state.find(todo => todo.id == action.payload);
            if (todo) {
                todo.completed == !todo.completed;
            }
        },
        index(){

        },
        removebookmark(state, action) {
            console.log(action.payload.title)
            state.splice(action.payload, 1)
            // const newArr=state.filter(obj=>{
            //     return obj.title != action.payload.title;
            // })
            // console.log(newArr)
            
        // state.push({...newArr})
        // console.log("-----new state------"+state)
        // state.(action.payload, 1)
        // state.filter(obj=>{
        //     return obj.title !==action.payload.title;
        // })

        },
    },
    get reducers() {
        return this._reducers;
    },
    set reducers(value) {
        return this._reducers = value;
    },
})
export const {addfavourites, toggletodo, removebookmark, bookmarked} =FavouriteSlices.actions
export default FavouriteSlices.reducer