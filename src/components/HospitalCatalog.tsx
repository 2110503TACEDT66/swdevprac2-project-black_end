'use client'

import Link from "next/link";
import Card from "./Card";
import getCompanies from "@/libs/getCompanies";

export default async function HospitalCatalog({hospitalJson}:{hospitalJson:Promise<HospitalJson>}){

    var CompanyJsonReady = await hospitalJson;
    if(!CompanyJsonReady){
        CompanyJsonReady = await getCompanies();
    }
    if(!CompanyJsonReady){
        throw new Error('failed to fetch Hospitals')
    }
    return(

        <>
        Explore {CompanyJsonReady.count} Companies in our event
            <div className="m-20 flex flex-row items-center justify-around flex-wrap p-10">
            {
                CompanyJsonReady.data.map((CompanyItem:CompanyItem)=>(
                    <Link href={`/hospital/${CompanyItem.id}`} className="w-1/5">
                        <Card hospitalName={CompanyItem.name} imgSrc={CompanyItem.picture} />
                    </Link>
                ))
            }
            </div>
        </>
    )
} 

