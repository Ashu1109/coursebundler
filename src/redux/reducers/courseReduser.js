import { createReducer } from "@reduxjs/toolkit";



export const courseReducer = createReducer({},{
    allCourseRequest:(state)=>{
        state.loading = true;
    },
    allCourseSuccess:(state,action)=>{
        state.loading = false;
        state.courses = action.payload;
    },
    allCourseFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload;
    },

    getCourseRequest:(state)=>{
        state.loading = true;
    },
    getCourseSuccess:(state,action)=>{
        state.loading = false;
        state.lectures = action.payload;
    },
    getCourseFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload
    },


    addToPlaylistRequest:(state)=>{
        state.loading = true;
    },
    addToPlaylistSuccess:(state,action)=>{
        state.loading = false;
        state.message = action.payload;
    },
    addToPlaylistFail:(state,action)=>{
        state.loading = false;
        state.error = action.payload
    },





    clearMessage:(state)=>{
        state.message = null;
    },
    clearError:(state)=>{
        state.message = null;
    }

})