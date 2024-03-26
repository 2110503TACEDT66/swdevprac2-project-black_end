
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import BookingList from "@/components/BookingList"
import getUserProfile from "@/libs/getUserProfile";
import getInterviews from "@/libs/getInterviews"

export default async function MyBookingPage(){
    const session = await getServerSession(authOptions)

    var profile;

    if (session) {
        profile = await getUserProfile(session.user.token)
    }

    const allInterviews = await  getInterviews(profile?.data.token||'');
    return(
        <main className="my-5 text-center flex flex-col">
            <BookingList user={profile} allInterviews={allInterviews}></BookingList>
        </main>
    )
}