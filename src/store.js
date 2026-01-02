import { configureStore } from "@reduxjs/toolkit";
import testReducer  from "./slice/testSlice";
import modalReducer from "./slice/modalSlice";
import newsReducer from "./slice/newsSlice";
import reservationReducer from "./slice/reservationSlice";



export const store = configureStore({
    reducer: { // 必要加入 reducer
      test: testReducer,
      modal: modalReducer,
      news: newsReducer,
      reservation: reservationReducer
      //counter為元件的名稱，可更改 
      //counterReducer為引入的元件改名後的名稱不可更改
    }
  });

export default store;