'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const bookItems = useAppSelector((state) => state.bookSlice.bookItems)
    if(!bookItems || bookItems.length===0){
        return (

           <p className="text-2xl">No Vaccine Booking</p>
        )
    }
    const dispatch=useDispatch<AppDispatch>()
    return (
        <>
        {   
            bookItems.map((BookingItem)=>(
                <div className="items-center text-center w-full h-full">
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 rounded-lg flex flex-row text-left w-3/5 " key={BookingItem.id}>
                    
                    <button className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
                    onClick={()=>{dispatch(removeBooking(BookingItem.id));console.log('romove booking')}}>
                    Cancel Booking
                    </button>
                    
                    <div className="m-5">
                    <div className="text-sm m-2">Name : {BookingItem.name}</div>
                    <div className="text-sm m-2">LastName : {BookingItem.surname} </div>
                    <div className="text-sm m-2">Citizen ID : {BookingItem.id} </div>
                    </div>
                    <div className="m-5">
                    <div className="text-sm m-2">Hospital :  {BookingItem.hospital} </div>
                    <div className="text-sm m-2">Date : {BookingItem.bookDate} </div>
                    </div>

                </div>
                </div>
                
            ))
        }
        </>
    )
}