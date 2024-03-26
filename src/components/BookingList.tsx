import { removeBooking } from "@/redux/features/bookSlice"
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux"
import { useSession } from "next-auth/react"
import getInterview from "@/libs/getInterview"
import getInterviews from "@/libs/getInterviews"
import deleteInterview from "@/libs/deleteInterview"
import { Button } from "@mui/material"

export default async function BookingList({user, interviewJson} : {user:userJSON, interviewJson:Promise<BookingJson>}){
    
    var interviewsJsonReady = await interviewJson;
    if(!interviewsJsonReady){
        interviewsJsonReady = await getInterviews(user?.data.token);
    }
    if(!interviewsJsonReady){
        throw new Error('Failed to fetch Interviews')
    }
    console.log(interviewJson)

    return (
        <>
            Explore {interviewsJsonReady.count} Interviews in our event
            <div className="m-20 flex flex-row items-center justify-around flex-wrap p-10 ">
            {
                interviewsJsonReady.data.map((BookingItem)=>(
                    <div className="items-center text-center w-full h-full">
                        <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 rounded-lg flex flex-row text-left w-3/5">
                            <div className="m-5">
                            <div className="text-sm m-2">Name : {BookingItem.user}</div>
                            <div className="text-sm m-2">Citizen ID : {BookingItem._id} </div>
                            </div>
                            <div className="m-5">
                            <div className="text-sm m-2">Selected Company :  {BookingItem.company.name} </div>
                            <div className="text-sm m-2">Booking Date : {BookingItem.interviewDate} </div>
                            </div>
                            </div> 
                        </div> 
                ))
            }
            </div>
        </>
        // <>
        // {   interviewsJsonReady.data.map((BookingItem:BookingItem)=>(
        //     <div className="items-center text-center w-full h-full">
        //     <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2 rounded-lg flex flex-row text-left w-3/5 " key={BookingItem.id}>
        //     {
        //         user?.data.token === BookingItem.token&& user?.data.role !== 'admin' ?<>
        //             <button className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
        //         onClick={()=>{dispatch(removeBooking(BookingItem.id));console.log('romove booking')}}>
        //         Cancel Booking
        //         </button>
                
                // <div className="m-5">
                // <div className="text-sm m-2">Name : {BookingItem.name}</div>
                // <div className="text-sm m-2">Citizen ID : {BookingItem.id} </div>
                // </div>
                // <div className="m-5">
                // <div className="text-sm m-2">Selected Company :  {BookingItem.company} </div>
                // <div className="text-sm m-2">Booking Date : {BookingItem.interviewDate} </div>
                // </div>
        //         </>:''
        //     }
        //     {
        //         user?.data.role === 'admin'?<>
        //         <button className="bg-blue-400 text-white hover:bg-sky-400 hover:text-gray-100 rounded p-5 m-5 "
        //         onClick={()=>{dispatch(removeBooking(BookingItem.id));console.log('romove booking')}}>
        //         Cancel Booking
        //         </button>
            
        //         <div className="m-5">
        //         <div className="text-sm m-2">Name : {BookingItem.name}</div>
        //         <div className="text-sm m-2">Citizen ID : {BookingItem.id} </div>
        //         </div>
        //         <div className="m-5">
        //         <div className="text-sm m-2">Selected Company :  {BookingItem.company} </div>
        //         <div className="text-sm m-2">Booking Date : {BookingItem.interviewDate} </div>
        //         </div>
        //         </>:''
        //     }

        // </div>
        // </div>
        
        // ))
        // }
        // </>
    )
}