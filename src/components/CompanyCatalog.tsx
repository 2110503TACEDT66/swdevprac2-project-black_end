import Link from "next/link";
import Card from "./Card";
import getCompanies from "@/libs/getCompanies";

export default async function CompanyCatalog({companyJson}:{companyJson:Promise<CompanyJson>}){

    var CompanyJsonReady = await companyJson;
    if(!CompanyJsonReady){
        CompanyJsonReady = await getCompanies();
    }
    if(!CompanyJsonReady){
        throw new Error('Failed to fetch Companies')
    }

    return(

        <>
        Explore {CompanyJsonReady.count} Companies in our event
            <div className="m-20 flex flex-row items-center justify-around flex-wrap p-10 ">
            {
                CompanyJsonReady.data.map((CompanyItem)=>(
                    <Link href={`/company/${CompanyItem.id}`} className="w-1/5">
                        <Card companyName={CompanyItem.name} imgSrc={CompanyItem.quote} />
                    </Link>
                ))
            }
            </div>
        </>
    )
} 

