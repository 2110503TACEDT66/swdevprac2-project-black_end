'use client'

import { TextField,Select,MenuItem, Button} from "@mui/material"
import DateReserve from "@/components/DateReserve"
import getUserProfile from "@/libs/getUserProfile"
import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import { useState,useEffect } from "react"
import dayjs, { Dayjs } from "dayjs"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import { addBooking } from "@/redux/features/bookSlice"

export default function Booking(){

    // const session = await getServerSession(authOptions); 

    // if(!session || !session.user.token) return null
    // const profile = await getUserProfile(session.user.token.toString())
    // var createdAt = new Date(profile.data.createdAt);

    const dispatch = useDispatch<AppDispatch>();
    const MakeBooking = () =>{
        console.log('Booking Interview in progress')
        if(fname && lastname && citizenID && interviewDate && chooseCompany){
            const item:BookingItem = {
                id:citizenID,
                company:chooseCompany,
                interviewDate:dayjs(interviewDate).format('YYYY/MM/DD'),
                createdAt:new Date(Date.now()),
                name:fname,
                surname:lastname,
            }
            console.log('success Booking')
            console.log(fname)
            console.log(lastname)
            console.log(citizenID)
            console.log(chooseCompany)
            console.log(dayjs(interviewDate).format('YYYY/MM/DD'))
            dispatch(addBooking(item));
            console.log(item.company)
        }
        if(!fname){
            alert('fname');
        }
        if(!lastname){
            alert('lname');
        }
        if(!citizenID){
            alert('cId');
        }
        if(!interviewDate){
            alert('No date');
        }
        if(!chooseCompany){
            alert('company');
        }
    }

    const [interviewDate,setinterviewDate] = useState<Dayjs|null>(null)
    const [chooseCompany, setchooseCompany] = useState<string|null>('Apple');
    const [fname, setFName] = useState('');
    const [lastname, setLastname] = useState('');
    const [citizenID, setCitizenID] = useState('');

    return(
        <main className="w-[100%] flex flex-col items-center space-y-10">
            <div className="text-2xl font-medium underline text-center text-teal-500 mt-8 transition transform duration-150 hover:text-cyan-900">
                Interview Session Booking
            </div>
            {/* <div className="text-2xl bg-blue-300 rounded-lg p-3 ring-2 hover:ring-inset hover:bg-blue-200">
                <table className="table-auto border-seperate border-spacing-2">
                    <tbody>
                        <tr><td>Name</td><td>{profile.data.name}</td></tr>
                        <tr><td>Email</td><td>{profile.data.email}</td></tr>
                        <tr><td>Tel</td><td>{profile.data.tel}</td></tr>
                        <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                    </tbody>
                </table>
            </div> */}
            <div className=" bg-blue-200 p-10 rounded-lg ring-2 items-center flex flex-col">
            <div className="table-auto border-seperate border-spacing-10">
                <table className="p-10">
                    <tr >
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Name' label='Name'
                        onChange={(e)=> setFName(e.target.value)}></TextField>
                        </td>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Lastname' label='Lastname'
                        onChange={(e)=> setLastname(e.target.value)}></TextField>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Citizen ID' label='Citizen ID'
                        onChange={(e)=> setCitizenID(e.target.value)}></TextField>
                        </td>
                    </tr>
                </table> 
            </div>
            <div className="p-10">
            <DateReserve onDateChange={(value:Dayjs)=>{setinterviewDate(value)}} 
            onCompanyChange={(value:string)=>{setchooseCompany(value)}} />
            </div>
            <Button name='Book Vaccine' 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full align-left "
            onClick={MakeBooking}>
                Book Interview Sessions
            </Button>
            </div>
            
        </main>
    )
}

