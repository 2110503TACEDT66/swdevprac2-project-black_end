import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BookingList from "@/components/BookingList"
import getUserProfile from "@/libs/getUserProfile";
import getInterviews from "@/libs/getInterviews"

export default async function MyBookingPage(){
    const session = await getServerSession(authOptions)
    var profile;
    var interviews

    if (session) {
        profile = await getUserProfile(session.user.token)
        interviews = await getInterviews(session.user.token);
    }

    
    return(
        <main className="my-5 text-center flex flex-col">
            <BookingList user={profile} interviewJson={interviews}></BookingList>
        </main>
    )
}