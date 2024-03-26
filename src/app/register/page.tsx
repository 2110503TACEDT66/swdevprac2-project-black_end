'use client'

import { TextField,Button } from "@mui/material"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/redux/store"
import registerUser from "@/libs/registerUser";
import Email from "next-auth/providers/email";
import { getSession } from "next-auth/react";
import { ServerSession } from "mongodb";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default function Register(){
    
    const dispatch = useDispatch<AppDispatch>();
    const register =()=>{
        if(fname && lastname && citizenID){
            const item:user = {
                _id: citizenID,
                name: fname+''+lastname,
                tel:tel,
                email: email,
                role: 'user',
                password:password
    
            }
            registerUser(item)
        }
    }

    const [fname, setFName] = useState('');
    const [lastname, setLastname] = useState('');
    const [citizenID, setCitizenID] = useState('');
    const [email,setEmail] = useState('');
    const [tel,setTel] =useState('')
    const [password,setPassword]=useState('')

    return(
            <main className="w-[100%] flex flex-col items-center space-y-10">
            <div className=" bg-blue-200 p-10 rounded-lg ring-2 items-center flex flex-col my-20">
            <div className="text-2xl font-medium underline text-center text-blue-700  transition transform duration-150 hover:text-blue-900">
                Register
            </div>
            <div className="table-auto border-seperate border-spacing-10">
                <table className="p-10">
                    <tr >
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Name' label='Name'
                        onChange={(e)=> setFName(e.target.value)}></TextField>
                        </td>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Email' label='Email'
                        onChange={(e)=> setEmail(e.target.value)}></TextField>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Lastname' label='Lastname'
                        onChange={(e)=> setLastname(e.target.value)}></TextField>
                        </td>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Citizen ID' label='Citizen ID'
                        onChange={(e)=> setCitizenID(e.target.value)}></TextField>
                        </td>
                    </tr>
                    <tr>
                        <td className="px-20 py-2">
                        <TextField variant="standard" name='Tel' label='Telephone Number'
                        onChange={(e)=> setTel(e.target.value)}></TextField>
                        </td>
                        <td className="px-20 py-2">
                        <TextField variant="standard" type='password' name='Password' label='Password'
                        onChange={(e)=> setPassword(e.target.value)}></TextField>
                        </td>
                    </tr>
                </table> 
            </div>
            <Button name='Register' 
            className=" hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full align-left "
            >
                Register
            </Button>
            </div>
            
        </main>
    )
}