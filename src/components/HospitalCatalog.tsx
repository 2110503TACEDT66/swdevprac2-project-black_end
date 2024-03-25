'use client'

import Link from "next/link";
import Card from "./Card";
import getHospitals from "@/libs/getHospitals";

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Promise<HospitalJson>}){

    var HospitalJsonReady = await hospitalJson;
    if(!HospitalJsonReady){
        HospitalJsonReady = await getHospitals();
    }
    if(!HospitalJsonReady){
        throw new Error('failed to fetch Hospitals')
    }
    return(

        <>
        Explore {HospitalJsonReady.count} Companies in our event
            <div className="m-20 flex flex-row items-center justify-around flex-wrap p-10">
            {
                HospitalJsonReady.data.map((HospitalItem:HospitalItem)=>(
                    <Link href={`/hospital/${HospitalItem.id}`} className="w-1/5">
                        <Card hospitalName={HospitalItem.name} imgSrc={HospitalItem.picture} />
                    </Link>
                ))
            }
            </div>
        </>
    )
} 

