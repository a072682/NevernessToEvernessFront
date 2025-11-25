


import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const BASE_URL = import.meta.env.VITE_BASE_URL;
// const API_PATH = import.meta.env.VITE_API_PATH;

//#region
//#endregion

export const testSlice = createSlice({
    name: "material",
    initialState: {
        testData:null,
    },
    reducers: {
        testDataUpLoad: (state, action) => {
            state.testData = action.payload;
        },
    },
});

export const { testDataUpLoad } = testSlice.actions;

//#region 測試連線
    //測試連線
    // export const linkTest = createAsyncThunk(
    //     "login/linkTest",
    //     async (_,{ dispatch }) => {
    //         try {
    //             const response = await axiosWithCookie.get(`${BASE_URL}/test-db`);
    //             console.log("連線成功",response.data);
    //             return(response.data);
    //         } catch (error) {
    //             console.log("連線失敗",error.response.data);
    //             return(error.response.data);
    //         }
    //     }
    // );
    //測試連線
//#endregion

    
        
export default testSlice.reducer;