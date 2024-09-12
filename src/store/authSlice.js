import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
        status: false,
        userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
            //In Redux, a payload is the data that you send to the store in order to update the state
        },
        logout: (state,action) => {
            state.status = false;
            state.userData = null;
        } 
    }
});

export const {login,logout} = authSlice.actions
export default authSlice.reducer


