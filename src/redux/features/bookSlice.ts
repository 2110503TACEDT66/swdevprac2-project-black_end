import Booking from "@/app/booking/page";
import { createSlice,PayloadAction } from "@reduxjs/toolkit"; 

type CompanyState ={
    companyItems:BookingItem[];
}

const initialState:CompanyState = {companyItems:[]};

export const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        addBooking:(state,action:PayloadAction<BookingItem>)=>{
            console.log(state.companyItems)
            const existingBookingIndex = state.companyItems.findIndex(booking => booking.id === action.payload.id);
            if(existingBookingIndex !== -1){
                state.companyItems[existingBookingIndex] = action.payload;
            }else{
                state.companyItems.push(action.payload);
            }
        },
        removeBooking:( state, action:PayloadAction<string> )=>{
            const remainItems = state.companyItems.filter(obj => obj.id !== action.payload)
            state.companyItems = remainItems;
        },
    }
})

export const {addBooking,removeBooking} = bookSlice.actions
export default bookSlice.reducer