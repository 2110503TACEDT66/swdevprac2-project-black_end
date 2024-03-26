'use client'

import Link from "next/link";
import Card from "./Card";
import getCompanies from "@/libs/getCompanies";

export default async function HospitalCatalog({companyJson}:{companyJson:Promise<CompanyJson>}){

    var CompanyJsonReady = await companyJson;
    if(!CompanyJsonReady){
        CompanyJsonReady = await getCompanies();
    }
    if(!CompanyJsonReady){
        throw new Error('failed to fetch Hospitals')
    }
    return(

        <>
        Explore {CompanyJsonReady.count} Companies in our event
            <div className="m-20 flex flex-row items-center justify-around flex-wrap p-10 ">
            {
                CompanyJsonReady.data.map((CompanyItem)=>(
                    <Link href={`/company/${CompanyItem.id}`} className="w-1/5">
                        <Card companyName={CompanyItem.name} imgSrc={CompanyItem.picture} />
                    </Link>
                ))
            }
            </div>
        </>
    )
} 

