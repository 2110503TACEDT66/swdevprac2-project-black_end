export default async function getHospital(id:string){
    
    const response = await fetch(`https://jobfair-backend.vercel.app/api/v1/companies/${id}`)
    if(!response){
        throw new Error('Failed to fetch car');
    }
    return await response.json();

}