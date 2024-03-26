export default async function addInterview(token:string, id:string, interviewDate:string){
    const response = await fetch(`https://jobfair-backend.vercel.app/api/v1/companies/${id}/interviews/`,{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
            authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            interviewDate: interviewDate
        }),
    })
    if(!response.ok){
        throw new Error('Failed to create interview')
    }
    return await response.json()
}