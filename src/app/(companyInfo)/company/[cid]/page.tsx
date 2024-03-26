import Image from "next/image"
import getCompany from "@/libs/getCompany";
import Link from "next/link";

export default async function CompanyDetailPage({params}:{params:{cid:string}}){
    
    const companyDetail = await getCompany(params.cid);



    // const mockHospitalRepo = new Map()
    // mockHospitalRepo.set('001',{
    //     name:'Chulalongkorn Hospital',
    //     image:'/img/Chula.jpg'
    // });
    // mockHospitalRepo.set('002',{
    //     name:'Rajavithi Hospital',
    //     image:'/img/rajavithi.jpg'
    // });
    // mockHospitalRepo.set('003',{
    //     name:'Thammasat University Hospital',
    //     image:'/img/thammasat.jpg'
    // })
    return(
        <main className="text-center p-5">
            <h1 className="text-lg font-medium "> Company: {companyDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={companyDetail.data.quote}
                alt="company Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-md mx-5 text-left"> 
                <h3 className="text-lg font-bold">
                {companyDetail.data.name}
                </h3>
                    <div>Description : {companyDetail.data.description}</div>
                    <div>Address : {companyDetail.data.address}</div>
                    <div>
                    Website :
                    <Link href={companyDetail.data.website} className="hover:text-sky-400"> {companyDetail.data.website}</Link>
                    </div>
                    <div>Tel. : {companyDetail.data.tel}</div>
                    <Link href={`/booking?id=${params.cid}`}>
                        <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm">
                             Make Booking
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{cid:'001'},{cid:'002'},{cid:'003'}]
// }