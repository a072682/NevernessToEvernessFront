


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_PATH = import.meta.env.VITE_API_PATH;

//#region
//#endregion

export const reservationSlice = createSlice({
    name: "reservation",
    initialState: {
        reservationState:true,
        reservationMessage:"",
    },
    reducers: {
        stateUpLoad: (state, action) => {
            state.reservationState = action.payload;
        },
        messageUpLoad: (state, action) => {
            state.reservationMessage = action.payload;
        },
    },
});

export const { stateUpLoad, messageUpLoad } = reservationSlice.actions;


//#region 上傳預約資料
    export const reservationDataUpLoad = createAsyncThunk(
            "login/userLoginCounter",
            async (reserveData,{ dispatch, rejectWithValue }) => {
                try {
                    const reservationRef = await axios.post(`${BASE_URL}/reservation/addSingleData`,reserveData);
                    //console.log("預約資料上傳成功",reservationRef.data);
            } catch (error) {
                //console.log("預約資料上傳失敗",error.response.data);
                if(!error.response.data.success){
                    dispatch(stateUpLoad(false));
                    dispatch(messageUpLoad(error.response.data.message));
                }
                return rejectWithValue(error.response.data);
            }
        }
    );
//#endregion


    
        
export default reservationSlice.reducer;