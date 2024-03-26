'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"

export default function BookingList(){
    const companyItems = useAppSelector((state) => state.bookSlice.companyItems)
    if(!companyItems || companyItems.length===0){
        return (

           <p className="text-2xl">No Interview Session Booking</p>
        )
    }
    const dispatch=useDispatch<AppDispatch>()
    return (
        <>
        {   
            companyItems.map((BookingItem)=>(
                <div className="items-center text-center w-full h-full">
                    <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 rounded-lg flex flex-row text-left w-3/5 " key={BookingItem.id}>
                    
                    <button className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
                    onClick={()=>{dispatch(removeBooking(BookingItem.id));console.log('romove booking')}}>
                    Cancel Booking
                    </button>
                    
                    <div className="m-5">
                    <div className="text-sm m-2">Name : {BookingItem.name}</div>
                    <div className="text-sm m-2">Citizen ID : {BookingItem.id} </div>
                    </div>
                    <div className="m-5">
                    <div className="text-sm m-2">Selected Company :  {BookingItem.company} </div>
                    <div className="text-sm m-2">Booking Date : {BookingItem.interviewDate} </div>
                    </div>

                </div>
                </div>
                
            ))
        }
        </>
    )
}