export default async function registerUser(json: JSON) {
    const response = await fetch('https://jobfair-backend.vercel.app/api/v1/auth/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(json) 
    });

    if (!response.ok) {
        throw new Error('Failed to fetch user profile');
    }

    return await response.json();
}
