'use client'
import { DatePicker } from "@mui/x-date-pickers"
import{ AdapterDayjs }from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from "@mui/x-date-pickers"
import { Select,MenuItem } from "@mui/material"
import { Dayjs } from "dayjs"
import { useState } from "react"

export default function DateReserve({onDateChange,onHospitalChange}
    :{onDateChange:Function,onHospitalChange:Function}){

    const [reserveDate,setReserveDate] = useState<Dayjs|null>(null)
    const [selectedHospital, setSelectedHospital] = useState<string|null>('Chula');

    return(
        <form className="bg-slate-100 rounded-lg space-x-5 space-y-2 
        w-fit px-10 py-5 flex flex-row justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" value={reserveDate} 
                onChange={(value)=>{setReserveDate(value);onDateChange(value)}}/>
            </LocalizationProvider>

            <Select variant="standard" name='location' id='location'
            className="h-[2em] w-[200px]" value={selectedHospital}
            onChange={(event)=>{ const value = event.target.value; setSelectedHospital(value);onHospitalChange(value)}}>
                <MenuItem value={'Chula'}>Chulalongkorn Hospital</MenuItem>
                <MenuItem value={'Rajavithi'}>Rajavithi Hospital</MenuItem>
                <MenuItem value={'Thammasat'}>Thammasat University Hospital </MenuItem>
            </Select>
        </form>
    )
}