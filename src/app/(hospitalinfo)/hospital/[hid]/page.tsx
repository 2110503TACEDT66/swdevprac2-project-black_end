import Image from "next/image"
import getHospital from "@/libs/getCompany";

export default async function HospitalDetailPage({params}:{params:{hid:string}}){
    
    const hospitalDetail = await getHospital(params.hid);



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
            <h1 className="text-lg font-medium "> Hospital ID {hospitalDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image src={hospitalDetail.data.picture}
                alt="Hospital Picture"
                width={0} height={0} sizes="100vw"
                className="rounded-lg w-[30%] bg-black"
                />
                <div className="text-md mx-5 text-left"> {hospitalDetail.data.name}
                    <div>Address : {hospitalDetail.data.address}</div>
                    <div>District : {hospitalDetail.data.district}</div>
                    <div>Province : {hospitalDetail.data.province}</div>
                    <div>Postal Code : {hospitalDetail.data.postalcode}</div>
                    <div>Tel. : {hospitalDetail.data.tel}</div>
                </div>
            </div>
        </main>
    )
}

// export async function generateStaticParams() {
//     return [{hid:'001'},{hid:'002'},{hid:'003'}]
// }