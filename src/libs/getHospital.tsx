export default async function getHospital(id:string){
    
    const response = await fetch(`https://vaccine-app-backend.vercel.app/api/v1/hospitals/${id}`)
    if(!response){
        throw new Error('Failed to fetch car');
    }
    return await response.json();

}