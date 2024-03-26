'use client'
import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useSession } from "next-auth/react"
import getInterview from "@/libs/getInterview"
import getInterviews from "@/libs/getInterviews"
import deleteInterview from "@/libs/deleteInterview"
import { useState } from "react"

export default function BookingList({user, interviewJson, token} : {user:userJSON, interviewJson:BookingJson, token:string}){

    console.log(user)

    const [interviews, setInterviews] = useState(interviewJson.data);

    const handleCancelBooking = async (interviewId: string) => {
        try {
            await deleteInterview(token, interviewId);
            // Remove the canceled interview from the state
            var interviewsPromise = await getInterviews(token);
            var newInterviews = await interviewsPromise
            setInterviews(newInterviews.data);
            alert("Successfully cancelled interview");
        } catch (error) {
            console.error("Failed to cancel interview", error);
            alert("Failed to cancel interview");
        }
    };

    return (
        <>        
        {   interviews.map((BookingItem)=>(
            <div className="items-center text-center w-full h-full">
            <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 rounded-lg flex flex-row text-left w-3/5 " key={BookingItem._id}>
            {
                user.data._id === BookingItem.user && user.data.role !== 'admin' ?
                <>
                    <button 
                        className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
                        onClick={() => handleCancelBooking(BookingItem._id)}>
                        Cancel Booking
                    </button>
                
                <div className="m-5">
                <div className="text-sm m-2 text-black font-semibold">Selected Company : {BookingItem.company.name} </div>
                <div className="text-sm m-2 text-black font-semibold">Booking Date : {BookingItem.interviewDate} </div>
                </div>
                </>:''
            }
            {
                user?.data.role === 'admin'?
                <>
                <button 
                    className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
                    onClick={() => handleCancelBooking(BookingItem._id)}>
                    Cancel Booking
                </button>
            
                <div className="m-5">
                <div className="text-sm m-2 text-black font-semibold">Selected Company : {BookingItem.company.name} </div>
                <div className="text-sm m-2 text-black font-semibold">Booking Date : {BookingItem.interviewDate} </div>
                </div>
                </>:''
            }

        </div>
        </div>
        
        ))
        }
        </>
    )
}