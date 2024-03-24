import { createSlice,PayloadAction } from "@reduxjs/toolkit"; 


type BookState ={
    bookItems:BookingItem[];
}

const initialState:BookState = {bookItems:[]};

export const bookSlice=createSlice({
    name:'book',
    initialState,
    reducers:{
        addBooking:(state,action:PayloadAction<BookingItem>)=>{
            const existingBookingIndex = state.bookItems.findIndex(booking => booking.id === action.payload.id);
            if(existingBookingIndex !== -1){
                state.bookItems[existingBookingIndex] = action.payload;
            }else{
                state.bookItems.push(action.payload);
            }
        },
        removeBooking:( state, action:PayloadAction<string> )=>{
            const remainItems = state.bookItems.filter(obj => obj.id !== action.payload)
            state.bookItems = remainItems;
        },
    }
})

export const {addBooking,removeBooking} = bookSlice.actions
export default bookSlice.reducer